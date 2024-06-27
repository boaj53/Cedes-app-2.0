import { View, Text, StyleSheet, Linking, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const Contenido = ({ route }) => {
  const [contenidoDetalles, setContenidoDetalles] = useState("");
  const [contenidoDetalles2, setContenidoDetalles2] = useState("");
  const [contenidoEnlace, setContenidoEnlace] = useState("");
  const [contenidoDetalles3, setContenidoDetalles3] = useState("");
  const { contenido } = route.params; // Obtenemos el contenido desde los parámetros de la ruta

  useEffect(() => {
    if (contenido?.detalles) {
      setContenidoDetalles(contenido.detalles);
    }
    if (contenido?.detalles2) {
      setContenidoDetalles2(contenido.detalles2);
    }
    if (contenido?.enlace) {
      setContenidoEnlace(contenido.enlace);
    }
    if (contenido?.detalles3) {
      setContenidoDetalles3(contenido.detalles3);
    }
  }, [contenido]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* TITULO */}
      <Text style={styles.text2}>Descripción de la actividad</Text>

         {/* Raya */}
         <View style={{
                backgroundColor: "#0C356A",
                height: 2,
                marginTop: 10,
                marginBottom: 10,
                width: 360,
                right: 1
              }}>
              </View>

      {/* Textos completos*/}
      <Text style={styles.text}>{contenidoDetalles}</Text>
      <Text style={styles.text}>{contenidoDetalles2}</Text>
      <Text style={styles.text}>{contenidoDetalles3}</Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            contenido.enlaces && Linking.openURL(contenido.enlaces);
          }}
          style={styles.button}
          title="Ver material"
          color="#0C2566"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  contentContainer: {
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: '#0C356A',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10, // Espacio entre los textos
  },
  buttonContainer: {
    marginTop: 20, // Espacio superior para separar del contenido
    marginBottom: 40, // Asegura que haya espacio suficiente al final
    width: '100%',
    alignItems: 'center',
  },
  text2: {
    fontSize: 18,
    right: 57,
    fontWeight: 'bold',
    color: '#0C356A',
  }
});

export default Contenido;
