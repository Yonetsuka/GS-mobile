import React, { useState } from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NovoAlerta from './src/screens/NovoAlerta';
import Cadastro from './src/screens/Cadsatro';

export default function App() {
  const [screen, setScreen] = useState<'login' | 'cadastro' | 'home' | 'novoAlerta'>('login');
  const [role, setRole] = useState<'admin' | 'user' | null>(null);
  const [usuarios, setUsuarios] = useState<{ username: string; password: string }[]>([]);
  const [alertas, setAlertas] = useState<{ tipo: string; local: string; descricao: string }[]>([]);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === '123') {
      setRole('admin');
      setScreen('home');
    } else {
      const user = usuarios.find(u => u.username === username && u.password === password);
      if (user) {
        setRole('user');
        setScreen('home');
      } else {
        alert('Usuário ou senha inválidos');
      }
    }
  };

  const handleCadastro = (username: string, password: string) => {
    if (usuarios.find(u => u.username === username)) {
      alert('Usuário já existe');
      return;
    }
    setUsuarios([...usuarios, { username, password }]);
    alert('Usuário cadastrado com sucesso');
    setScreen('login');
  };

  if (screen === 'login') {
    return <Login onLoginSuccess={handleLogin} onCadastrar={() => setScreen('cadastro')} />;
  }

  if (screen === 'cadastro') {
    return <Cadastro onCadastrar={handleCadastro} onVoltar={() => setScreen('login')} />;
  }

  if (screen === 'home') {
    if (!role) return null;
    return (
      <Home
        role={role}
        alertas={alertas}
        onNovaMensagem={() => setScreen('novoAlerta')}
        onLogout={() => {
          setRole(null);
          setScreen('login');
        }}
      />
    );
  }

  if (screen === 'novoAlerta') {
    return (
      <NovoAlerta
        onVoltar={() => setScreen('home')}
        onSalvar={novoAlerta => {
          setAlertas([...alertas, novoAlerta]);
          setScreen('home');
        }}
      />
    );
  }

  return null;
}
