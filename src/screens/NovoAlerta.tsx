import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Props = {
  onVoltar: () => void;
  onSalvar: (alerta: { tipo: string; local: string; descricao: string }) => void;
};

const tipos = ['enchente', 'granizo', 'temporal', 'vendaval'];

export default function NovoAlerta({ onVoltar, onSalvar }: Props) {
  const [tipo, setTipo] = useState(tipos[0]);
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');

  // Função para mostrar a imagem dependendo do tipo
  const imagemPorTipo = (tipo: string) => {
    switch (tipo) {
      case 'enchente':
        return require('../assets/enchente.png');
      case 'granizo':
        return require('../assets/granizo.png');
      case 'temporal':
        return require('../assets/temporal.png');
      case 'vendaval':
        return require('../assets/vendaval.png');
      default:
        return null;
    }
  };

  const handleSalvar = () => {
    if (!local || !descricao) {
      alert('Preencha todos os campos');
      return;
    }
    onSalvar({ tipo, local, descricao });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Alerta</Text>

      <Text>Tipo:</Text>
      <Picker
        selectedValue={tipo}
        onValueChange={(itemValue) => setTipo(itemValue)}
        style={styles.picker}
      >
        {tipos.map((t) => (
          <Picker.Item key={t} label={t.charAt(0).toUpperCase() + t.slice(1)} value={t} />
        ))}
      </Picker>

      {imagemPorTipo(tipo) && (
        <Image source={imagemPorTipo(tipo)} style={styles.imagem} resizeMode="contain" />
      )}

      <Text>Local:</Text>
      <TextInput
        value={local}
        onChangeText={setLocal}
        style={styles.input}
        placeholder="Local do alerta"
      />

      <Text>Descrição:</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        style={[styles.input, { height: 80 }]}
        placeholder="Descrição do alerta"
        multiline
      />

      <Button title="Salvar" onPress={handleSalvar} />
      <Button title="Voltar" onPress={onVoltar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 15, textAlign: 'center' },
  picker: { height: 50, width: '100%', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
  imagem: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
});
