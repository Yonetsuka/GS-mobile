import { View, Text } from 'react-native';
import { Alerta } from '../types/alerta';

export default function AlertaCard({ alerta }: { alerta: Alerta }) {
  return (
    <View style={{ marginTop: 16, padding: 16, backgroundColor: '#ddd', borderRadius: 8 }}>
      <Text>{alerta.tipo} ({alerta.severidade})</Text>
      <Text>{alerta.local}</Text>
      <Text>{new Date(alerta.dataHora).toLocaleString()}</Text>
      <Text>{alerta.descricao}</Text>
    </View>
  );
}
