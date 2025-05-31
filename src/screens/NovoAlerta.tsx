import { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AlertaContext } from '../contexts/AlertaContext';
import { TIPOS_ALERTA } from '../types/tipos';

export default function NovoAlerta({ navigation }: any) {
  const [form, setForm] = useState({
    tipo: 'temporal',
    local: '',
    descricao: '',
  });

  const { adicionarAlerta } = useContext(AlertaContext);

  const handleSalvar = () => {
    const novoAlerta = {
      ...form,
      dataHora: new Date().toISOString(),
      severidade: 'Alta',
    };
    adicionarAlerta(novoAlerta);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ marginBottom: 4 }}>Tipo de evento climático:</Text>
      <Picker
        selectedValue={form.tipo}
        onValueChange={(value) => setForm({ ...form, tipo: value })}
      >
        {TIPOS_ALERTA.map((tipo) => (
          <Picker.Item key={tipo.value} label={tipo.label} value={tipo.value} />
        ))}
      </Picker>

      <TextInput
        placeholder="Local da falta de energia"
        value={form.local}
        onChangeText={(text) => setForm({ ...form, local: text })}
        style={{ marginTop: 12, marginBottom: 12 }}
      />

      <TextInput
        placeholder="Descrição"
        multiline
        numberOfLines={4}
        value={form.descricao}
        onChangeText={(text) => setForm({ ...form, descricao: text })}
        style={{ marginBottom: 12 }}
      />

      <Button title="Salvar Alerta" onPress={handleSalvar} />
    </View>
  );
}
