import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
}

export default function PrimaryButton({ title, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
    
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#38bdf8',     
        marginTop: 30,
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 50,
        elevation: 5,
    },
    buttonText: {
        color: '#020617',
        fontSize: 16,
        fontWeight: 'bold',
    },
});