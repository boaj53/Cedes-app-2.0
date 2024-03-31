import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login'
import Semestres from '../screens/Semestres'
import Materia from '../screens/Materia'
import Contenido from '../screens/Contenido'


const Stack = createNativeStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Semestres" component={Semestres}/>
        <Stack.Screen name= "Materias" component={Materia}/>
        <Stack.Screen name="Contenido" component={Contenido}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
};

