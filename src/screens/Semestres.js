import { StyleSheet, Text, View, Image, Pressable, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react"
import { semestres } from '../components/Constants'



export default function Semestres({ navigation }) {


  // --------------------------------
  const [listSemestres, setListSemestres] = useState([])
  async function fetchData() {
    const response = await fetch("https://wondrous-sprinkles-f5b9b5.netlify.app/db.json")
    const data = await response.json()
    console.log("---------------------------------------");
    // console.log(data);
    setListSemestres(data)
    console.log("---------------------------------------");
  }
  useEffect(() => {
    fetchData()
  }, [])
  // --------------------------------


  return (
    <View >

      <View style={styles.parentContainer}>
        {semestres.map((item) => (
          <Card item={item} navigation={navigation} />
        ))}
      </View>

    </View>
  )
}

const Card = ({ item, navigation }) => (

  <View style={styles.itemContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate("Materias", { item: item })}
      style={{
        height: Dimensions.get("window").height / 3 - 18,

      }}
    >
      <ImageBackground
        source={item.image}
        style={{
          height: "100%",
          resizeMode: 'cover',
          justifyContent: 'center',

        }}
      >
        <Text style={styles.text}>
          {item.name}
        </Text>

      </ImageBackground>
    </TouchableOpacity>
  </View>

)

const styles = StyleSheet.create({

  parentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  itemContainer: {
    width: Dimensions.get("screen").width / 2

  },
  text: {
    color: "white",
    textAlign: 'left',
    fontSize: 23,
    padding: 7,
    paddingTop: 31
  }
})