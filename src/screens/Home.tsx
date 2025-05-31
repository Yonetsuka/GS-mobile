import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

type Alerta = {
  tipo: string;
  local: string;
  descricao: string;
};

type Props = {
  alertas: Alerta[];
  role: 'admin' | 'user';
  onNovaMensagem: () => void;
  onLogout: () => void;
};

export default function Home({ alertas, role, onNovaMensagem, onLogout }: Props) {
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

  const renderItem = ({ item }: { item: Alerta }) => (
    <View style={styles.alertaContainer}>
      {imagemPorTipo(item.tipo) && (
        <Image source={imagemPorTipo(item.tipo)} style={styles.imagem} resizeMode="contain" />
      )}
      <View style={styles.info}>
        <Text style={styles.tipo}>{item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}</Text>
        <Text style={styles.local}>{item.local}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas</Text>

      <View style={styles.listContainer}>
        <FlatList
          data={alertas}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum alerta disponível.</Text>}
        />
      </View>

      <View style={styles.buttonsContainer}>
        {role === 'admin' && (
          <View style={styles.button}>
            <Button title="Criar Alerta" onPress={onNovaMensagem} />
          </View>
        )}

        <View style={styles.button}>
          <Button title="Sair" onPress={onLogout} color="#d9534f" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'space-between' },
  title: { fontSize: 24, marginBottom: 10, textAlign: 'center' },
  listContainer: { flex: 1 },
  alertaContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  info: { flex: 1 },
  tipo: { fontWeight: 'bold', fontSize: 16 },
  local: { fontSize: 14, color: '#555' },
  descricao: { fontSize: 14 },

  buttonsContainer: {
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
  },
});
