import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

export default function HomeScreen() {

    const [message, setMessage] = useState('Clique no botaõ abaixo');
    const [isActive, setIsActive] = useState(false);
     
    return (
        <View style={styles.container, active ? 'black' : '#0f172a'}>
            <Text style={styles.title}>React Native</Text>
            <Text style={styles.subtitle}>Projeto com Typescript e Expo</Text>

            <Text style={styles.message}>{message}</Text>

            <PrimaryButton title="Ativar Projeto" onPress={() => setMessage('App rodando com sucessso')} />

            <View style={styles.card}>
                <Text style={styles.cardText}>Mobile é Projeto Pratico</Text>
            </View>

            <PrimaryButton title="Ativar Projeto" onPress={() => setIsActive(!sActive)} />
 
        </View>
    )   
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f242e',
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 24,
    },
    message: {
        marginTop: 20,
        fontSize: 18,
        color: '#330f52'
    },
    card: {
        marginTop: 40,
        backgroundColor: '#041a7c',
        padding: 25,
        borderRadius: 16,
        width: '85%',
        borderWidth: 1,
        borderColor: '#38dbF8',
    },
    cardText: {
        color: '#e5e7eb',
        textAlign: 'center',
        fontSize: 15,
    }

});

