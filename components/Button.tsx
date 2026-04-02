import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme == 'primary') {
        return (
            <View style={style.buttonContainer}>
                <Pressable
                    style={[
                        style.button,
                        theme === 'primary' && { backgroundColor: '#FE9C51' }
                    ]}
                    onPress={onPress}
                >
                    <Text style={[style.buttonLabel, {color: 'black'}]}>{label}</Text>
                </Pressable>
            </View>
        );

    }

    return (
        <View style={style.buttonContainer}>
            <Pressable style={style.button} onPress={() => alert('You pressed a button.')}>
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
    
}

const style = StyleSheet.create({
    buttonContainer: {
        width: 220,
        height: 58,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#f5ff6bff',
    },
    buttonLabel: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonIcon: {
        paddingRight: 8
    }
});