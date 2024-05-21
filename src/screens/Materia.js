import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Materia = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation(); // Obteniendo el objeto de navegación

  return (
    <View style={styles.container}>
      <FlatList 
        data={item.materias}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{
              alignItems: 'flex-start',
              marginVertical: 10,
              paddingBottom: 17,
              justifyContent: 'center',
              backgroundColor: '#FFF0CE',
              marginHorizontal: 23,
              borderRadius: 17,
              borderColor: '#FFC436',
              borderWidth: 2,
            }}
            onPress={() => navigation.navigate('Subcompetencias', { materia: item })}
          >
            <Image 
              source={item.image}   
              style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 150, width: '100%' }}
            />
            <View style={{ paddingHorizontal: 10, marginTop: 10 }}>             
              <Text style={{
                fontWeight: 'bold',
                color: '#0C356A',
                fontSize: 18,                                              
              }}>
                {item.materia}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  }
});

export default Materia;
