import React from 'react';
import { Text} from 'react-native';
import { useContext } from 'react';
import { View, Button, ScrollView } from 'react-native';
import { AlertaContext } from '../contexts/AlertaContext';
import AlertaCard from '../components/AlertaCard';

export default function Home({ navigation }: any) {
  const { alertas } = useContext(AlertaContext);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Button title="Novo Alerta" onPress={() => navigation.navigate('NovoAlerta')} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Últimos alertas de falta de energia
      </Text>
      {alertas.map((a, i) => (
        <AlertaCard key={i} alerta={a} />
      ))}
    </ScrollView>
  );
}
