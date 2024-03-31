import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, handlePress } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}) {
  
const navigationObjetc = useNavigation();

const handlePress = () => {
  navigation.navigate ('Semestres')
}

  return (
    <View style={styles.container}>

      

      <View>
      <Image source={require('../../assets/Login/Login.png')} style={styles.image}/>
      
      </View>
      
    {/* <Image source={require('../../assets/Login/Login.png')} style={styles.image}/>*/}
   
    <LinearGradient colors={['transparent', '#0C356A']} style={styles.gradient}/>

    <View>
    <Text style={styles.text}>INGRESE USUARIO</Text>   
    </View>



    <View>
    <Text style={styles.text2}>Correo electronico</Text> 
    <TextInput
    placeholder='Alumno@ejemplo.com'
    placeholderTextColor={'blue'}
     style={styles.input} />

    <Text style={styles.text2}> Contraseña</Text>
    <TextInput
    placeholder='Ingrese su contraseña'
    placeholderTextColor={'blue'}
     style={styles.input} />
    </View>



    <TouchableOpacity onPress={handlePress} style={styles.button} >
      <Text style={styles.buttonText}>Ingresa</Text>

    </TouchableOpacity>
   

  
    </View>
    
  )
};




const styles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: '#0C356A',
    alignItems: 'center'
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    
    
    
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%', 
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: -430,
    fontSize: 30
  },
  text2: {
    color: '#FFC436',
    top: -380,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  input: {
    height: 40,
    width: 215,
    margin: 12,
    borderWidth: 1,
    top: -380,
    borderRadius: 10,
    backgroundColor: '#ffff',
    borderColor: '#0C356A',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0174BE',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    top: -370,
    width: 210
  },
  buttonText: {
    color: 'white'
  }
  

 
})