import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
//import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [message, setMessage] = useState('Clique no botão para mudar a mensagem!');
  const [Active, setActive] = useState(false);
  return (
    <View style={[styles.container, Active && { backgroundColor: '#1e293b' }, !Active && { backgroundColor: '#f1f5f9' }]}>
      <Text style={[styles.title, !Active && { color: '#0f172a' }]}>React Native</Text>
      <Text style={[styles.subtitle, !Active && { color: '#1e293b' }]}>Projeto Mobile com React Native TypeScript</Text>
      <Text style={[styles.message, !Active && { color: '#0f172a' }]}>{message}</Text>
      <PrimaryButton 
        title="Ativar Projeto"
        onPress={() => setMessage('Projeto Ativado!')}
      />
      <PrimaryButton 
        title="Desativar Projeto"
        onPress={() => setMessage('Projeto Desativado!')}
      />
      <View style={[styles.card, !Active && { backgroundColor: '#ffffff', borderColor: '#0f172a' }]}>
        <Text style={[styles.cardText, !Active && { color: '#0f172a' }]}>
          Este é um card de exemplo no React Native!
        </Text>
      </View>
      <PrimaryButton 
        title="Alternar Tema"
        onPress={() => setActive(!Active)}
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
      color: '#f8fafc'
    },
    card : {
      marginTop: 40,
      backgroundColor: '#020617',
      width: '85%',
      padding: 25,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#38bdf8',
    },
    cardText :{
      color: '#e5e7eb',
      fontWeight: '500',
      textAlign: 'center',
    }
  });