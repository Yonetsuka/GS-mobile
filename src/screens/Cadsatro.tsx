import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

type Props = {
  onCadastrar: (username: string, password: string) => void;
  onVoltar: () => void;
};

export default function Cadastro({ onCadastrar, onVoltar }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    onCadastrar(username, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />
      <Button title="Voltar ao Login" onPress={onVoltar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 4 },
});
