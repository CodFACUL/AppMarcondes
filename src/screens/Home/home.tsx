import React, {useState, useEffect} from 'react'
import type {ReactNode} from 'react'
import {ProdutoData} from '../../types/produto'
import api from '../../services/api'

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    FlatList,
    Image,
} from 'react-native'

function Home({navigation}) {
    const [produtos, setProdutos] = useState<ProdutoData[]>([])
    
    const loadProdutos = async () => {
        const response = await api.get('produto')
        setProdutos(response.data)
    }
    loadProdutos()
    return (
        <SafeAreaView style={styles.backgroud}>
            <View>
                <FlatList
                    data={produtos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View style={styles.containerLista}>
                            <Image
                                source={{
                                    uri: 'https://reactjs.org/logo-og.png',
                                }}
                                style={styles.imagemLista}
                            />
                            <Text style={styles.buttonText}>
                                {item.descricao}
                            </Text>
                        </View>
                    )}
                />
            </View>
            <View style={[styles.posiciona]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Postar')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Postar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroud: {
        backgroundColor: 'orange',
    },
    container: {
        flex: 1,
    },
    button: {
        width: 100,
        backgroundColor: '#6dc4a4',
        borderRadius: 10,
        position: 'absolute',
        top: -50,
    },
    buttonText: {
        fontSize: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    posiciona: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLista: {
        height: 270,
        marginTop: 30,
    },
    imagemLista: {
        width: 300,
        height: 200,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})

Home.navigationOptions = {
    title: 'Home',
}
export default Home
