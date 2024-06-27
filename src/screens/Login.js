import { StyleSheet, Text, View, Image, TextInput, Button,  ImageBackground } from 'react-native';
import React, { useState } from 'react';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (

    // <ScrollView style={{ flex: 1 }}>

    <ImageBackground
      source={require('../../assets/Pantalla_Login.png')}
      resizeMode="cover"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      }}
    >

      <View style={{ flex: 1 }}>
        <Image source={require('../../assets/logoUnach.png') }  style={styles.imagen}/> 
        <Image source={require('../../assets/CedesLogo.png') }  style={styles.imagen2}/> 

        {/* Agregar todos los elementos en este view */}
        <View style={styles.forma}>
          <Text style={styles.text}>INGRESE USUARIO</Text>

          <View>
            <Text style={styles.text2}>Correo Electrónico</Text>
            <TextInput
              placeholder='alumno@unach.mx'
              placeholderTextColor={'#0174BE'}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.text3}>Contraseña</Text>
            <TextInput
              placeholder='*********'
              placeholderTextColor={'#0174BE'}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

          </View>
          <View style={styles.boton}>
            <Button
              title="INGRESA"
              onPress={() => navigation.navigate('Semestres')}
            />
          </View>
        </View>

      </View>
    </ImageBackground>


    // </ScrollView>

  );
}

export default Login;

const styles = StyleSheet.create({
  forma: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    marginBottom: 60,
    // backgroundColor: '#0C356A',
    // marginTop: -153,
    // resizeMode: 'cover',
    // paddingTop: 30,  // Espacio superior
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    top: -85
    // marginBottom: 18,
    // marginTop: -40
  },
  text2: {
    color: '#FFC436',
    textAlign: 'left',
    marginTop: 0, // Espacio superior
    fontSize: 16,
    top: -40
    // paddingLeft: 10,
    // paddingRight: 110
  },
  text3: {
    color: '#FFC436',
    textAlign: 'center',
    textAlign: 'left',
    top: -40,// Espacio superior
    fontSize: 16,
    // paddingRight: 150
  },
  input: {
    height: 40,
    width: 260,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#ffff',
    borderColor: '#0C356A',
    textAlign: 'left',
    paddingHorizontal:20,
    fontSize: 17,
    top: -50,
    
  },
  boton: {
    marginTop: 15,
    width: 260,
    borderRadius: 200,
    top: -30
  },
  imagen: {
    resizeMode: 'contain',
    height: 110,
    left: 140,
    top: 30
  },
  imagen2: {
    resizeMode: 'contain',
    height: 109,
    left: 37,
    top: -80
  }
});
