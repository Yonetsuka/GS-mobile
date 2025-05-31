import React from 'react';
import { Text} from 'react-native';
import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { AlertaContext } from '../contexts/AlertaContext';

export default function NovoAlerta({ navigation }: any) {
  const [form, setForm] = useState({ tipo: '', local: '', descricao: '' });
  const { adicionarAlerta } = useContext(AlertaContext);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ marginBottom: 4 }}>Tipo de Evento Climático:</Text>
      <TextInput placeholder="Tipo" onChangeText={t => setForm({ ...form, tipo: t })} />
      <TextInput placeholder="Local de falta de energia" onChangeText={t => setForm({ ...form, local: t })} />
      <TextInput placeholder="Descrição da interrupção" multiline onChangeText={t => setForm({ ...form, descricao: t })} />
      <Button title="Salvar" onPress={() => {
        adicionarAlerta({ ...form, dataHora: new Date().toISOString(), severidade: 'Alta' });
        navigation.goBack();
      }} />
    </View>
  );
}
