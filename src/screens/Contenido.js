import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

const Contenido = ({ route }) => {
  const [contenidoDetalles, setContenidoDetalles] = useState("");
  const { contenido } = route.params; // Obtenemos el contenido desde los parámetros de la ruta

  useEffect(() => {
    if (contenido?.detalles) {
      setContenidoDetalles(contenido.detalles);
    }
  }, [contenido]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{contenidoDetalles}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0CE',
  },
  text: {
    color: '#0C356A',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Contenido;
