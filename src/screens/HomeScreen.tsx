import { View, Text, StyleSheet } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Projeto Mobile com React Native TypeScript</Text>
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
  });