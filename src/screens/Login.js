import { StyleSheet, Text, View, Image, TextInput, Button, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Image source={require('../../assets/Login/Login.png')} style={styles.imagen} />
          <LinearGradient
            colors={['transparent', '#0C356A']}
            style={styles.gradient}
          />

          {/* Agregar todos los elementos en este view */}
          <View style={styles.forma}>
            <Text style={styles.text}>INGRESE USUARIO</Text>

            <Text style={styles.text2}>Correo electrónico</Text>
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

            <View style={styles.boton}>
              <Button
                title="INGRESA"
                onPress={() => Alert.alert('Hola Alumno')}
              />
            </View>
          </View>

          <LinearGradient
            colors={['transparent', '#0C356A']}
            style={styles.gradient}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Login;

const styles = StyleSheet.create({
  forma: {
    flex: 1,
    backgroundColor: '#0C356A',
    marginTop: -151,
    resizeMode: 'cover',
    alignItems: 'center',
    paddingTop: 30,  // Espacio superior
  },
  imagen: {
    resizeMode: 'contain',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 330,
    bottom: 349,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 18,
    marginTop: -41
  },
  text2: {
    color: '#FFC436',
    textAlign: 'center',
    marginTop: 20, // Espacio superior
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 110
  },
  text3: {
    color: '#FFC436',
    textAlign: 'center',
    marginTop: 15, // Espacio superior
    fontSize: 16,
    paddingRight: 150
  },
  input: {
    height: 40,
    width: 260,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: '#ffff',
    borderColor: '#0C356A',
    textAlign: 'center',
    fontSize: 17
  },
  boton: {
    marginTop: 15,
    width: 260,
    borderRadius: 200
  }
});
