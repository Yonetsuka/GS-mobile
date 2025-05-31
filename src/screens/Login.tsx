import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

type Props = {
  onLoginSuccess: (username: string, password: string) => void;
  onCadastrar: () => void;
};

export default function Login({ onLoginSuccess, onCadastrar }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Entrar" onPress={() => onLoginSuccess(username, password)} />
      <Button title="Cadastrar" onPress={onCadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 4 },
});
