import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login'
import Semestres from '../screens/Semestres'
import Materia from '../screens/Materia'
import Contenido from '../screens/Contenido'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Subcompetencia from '../screens/Subcompetencia'


const Stack = createNativeStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Semestres" component={Semestres} options={{title: 'Semestres', headerStyle: {backgroundColor: '#0C2566'}, headerTintColor: '#fff'}}/>
        <Stack.Screen name= "Materias" component={Materia} options={  ({ title:'Materias', headerStyle: { backgroundColor: '#0C2566' }, headerTintColor: '#fff' })}/>
        <Stack.Screen name= "Subcompetencias" component={Subcompetencia} options={  ({ title:'Subcompetencias', headerStyle: { backgroundColor: '#0C2566' }, headerTintColor: '#fff' })}/>
        <Stack.Screen name="Contenido" component={Contenido} options={  ({ title:'Detalles', headerStyle: { backgroundColor: '#0C2566' }, headerTintColor: '#fff' })}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
};

