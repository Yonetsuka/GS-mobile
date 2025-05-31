import { View, Text, Image } from 'react-native';
import { Alerta } from '../types/alerta';

const imagens = {
  temporal: require('../../assets/temporal.png'),
  granizo: require('../../assets/granizo.png'),
  enchente: require('../../assets/enchente.png'),
  vendaval: require('../../assets/vendaval.png'),
};

export default function AlertaCard({ alerta }: { alerta: Alerta }) {
  const imagem = imagens[alerta.tipo as keyof typeof imagens];

  return (
    <View style={{ padding: 16, backgroundColor: '#eee', borderRadius: 10, marginBottom: 12 }}>
      {imagem && (
        <Image
          source={imagem}
          style={{ width: 80, height: 80, marginBottom: 8 }}
          resizeMode="contain"
        />
      )}
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
        Falta de energia por {alerta.tipo.toUpperCase()}
      </Text>
      <Text>📍 Local: {alerta.local}</Text>
      <Text>🕒 Data/hora: {new Date(alerta.dataHora).toLocaleString()}</Text>
      <Text>📝 Descrição: {alerta.descricao}</Text>
    </View>
  );
}