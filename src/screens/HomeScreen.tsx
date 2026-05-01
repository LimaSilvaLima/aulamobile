import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
//import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [message, setMessage] = useState('Clique no botão para mudar a mensagem!');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Projeto Mobile com React Native TypeScript</Text>
      <Text style={styles.message}>{message}</Text>
      <PrimaryButton 
        title="Ativar Projeto"
        onPress={() => setMessage('Projeto Ativado!')}
      />
      <PrimaryButton 
        title="Desativar Projeto"
        onPress={() => setMessage('Projeto Desativado!')}
      />
      </View>
  );
}

const styles = StyleSheet.create({      
    container: {
      flex: 1,
      backgroundColor: "#0f172a",
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 42,
      fontWeight: '800',
      color: '#38bdf8',
    },
    subtitle: {
    marginTop: 10,
      fontSize: 16,
      fontWeight: '600',
      color: '#e5e7eb',
      opacity: 0.8,
    },
    message: {
      marginTop: 20,
      fontSize: 18,
      color: '#f8fafc',
    
    }
  });