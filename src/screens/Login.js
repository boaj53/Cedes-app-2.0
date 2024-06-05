import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    
    <View style={{flex: 1, backgroundColor: 'red'}}>
    
     
      <Image source={require('../../assets/Login/Login.png')} style={styles.imagen}/>
     

      

     <View style={styles.forma}/> 
       
     
    </View>

 
   
  )
}

export default Login

const styles = StyleSheet.create({
  forma: {
    flex: 2,
    backgroundColor: '#0C356A',
    marginTop: -140,
    resizeMode: 'cover'
  },
  imagen: {
    resizeMode: 'contain',
    top: 0
  },
  degradado: {
    flex: 1
  }

})