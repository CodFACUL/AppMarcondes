import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import api from '../services/api';


function Formulario  ()  {
    const [id, setId] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSave = async () => {
        await api.post("produto", {descricao});
        setDescricao('');
    };

    return (
        <SafeAreaView style={styles.backgroud}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.text}>Comente o que esta pensando</Text>
                <TextInput
                    value={descricao}
                    style={styles.input}
                    onChangeText={setDescricao}
                    multiline
                    numberOfLines={4}
                />
                <TouchableOpacity onPress={handleSave} style={styles.button}>
                    <Text style={styles.buttonText}>Publicar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

Formulario.navigationOptions = {
    title: 'Postar',
};

const styles = StyleSheet.create({
    backgroud: {
        backgroundColor: 'orange',
        height: '100%',
    },
    input: {
        width: 300,
        marginTop: 30,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30,
    },
    button: {
        width: 100,
        backgroundColor: '#6dc4a4',
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        fontSize: 20,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

export default Formulario;
