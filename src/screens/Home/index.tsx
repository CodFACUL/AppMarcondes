import Home from './home'
import Formulario from '../formulario'
import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Postar" component={Formulario} />
        </Stack.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
