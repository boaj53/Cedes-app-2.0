/*import { FlatList, StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { semestres } from './Constants'
import { useNavigation } from '@react-navigation/native'

const SemestresList = () => {

  const navigation = useNavigation();

  return (
    <View style={{flex:1, height: "100%"}}>
      <FlatList 
        data={semestres}
        renderItem={({item})=> (
          <View style={styles.itemContainer}>
            <Pressable 
              onPress={() => navigation.navigate("Materias", {item: item}) }
              style={{
                alignItems: 'center',              
                flex: 1                
              }}
            >
              <ImageBackground
                source={item.image} 
                style={{
                  width: "100%",
                  height: 100,
                  resizeMode: 'cover',
                  justifyContent: 'center',
                  alignItems: 'flex-start'
                }}
              >  
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                    {item.name}
                    </Text> 
                    </View>
              </ImageBackground>
            </Pressable>
          </View>
        )}
        numColumns={2}      
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default SemestresList

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,        
  },
  itemText: {
    color: "white",
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold'
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingTop: 50,
  },
}) */
