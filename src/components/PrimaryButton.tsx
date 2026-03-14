import { TouchableOpacity, Text, StyleSheet, Button } from "react-native"; 
import {useState} from 'react';


interface Props {
    title: string;
    onPress: () => void;
}

export default function  PrimaryButton({ title, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        backgroundColor: '#38BDF8',
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 50,
        elevation: 5,
    },
    text: {
        color: '#020617',
        fontWeight: 'bold',
        fontSize: 16,
    }
});