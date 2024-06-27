import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Button, Linking, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect, useState } from "react"



const Subcompetencia = ({ route }) => {
  const [busqueda, setBusqueda] = useState("")
  const [listaSubCompetencias, setListaSubCompetencias] = useState([])
  const [listaSubCompetenciasStore, setListaSubCompetenciasStore] = useState([])


  const [listaContenido, setListContenido] = useState([])


  const { materia } = route.params;
  const navigation = useNavigation(); // Obteniendo el objeto de navegación


  useEffect(() => {
    setListaSubCompetencias(materia.subcompetencia)
    setListaSubCompetenciasStore(materia.subcompetencia)



    const itemsContenido = materia.subcompetencia.map((data) => {
      return (
        data.contenido.map((dataContenido) => (dataContenido.nombre))
      )
    });

    // console.log(itemsContendo[0])
    setListContenido(itemsContenido)



  }, [])



  function searchText(searchInput) {
    setBusqueda(searchInput);
    // console.log(searchInput);

    const searchNew = searchInput.trim().toLowerCase();
    if (searchNew.length >= 1) {
      filter(searchNew);
    } else if (searchNew.length == 0) {
      setListaSubCompetencias(listaSubCompetenciasStore);
    }
  }

  function filter(search) {
    const arrayFilter = listaSubCompetenciasStore.filter((data) => {

      // console.log("-------------------");

      // const data2 = data.contenido.filter((dataContenido) => {
      //   return (
      //     dataContenido.descripcion.includes(search)
      //   )
      // })
      // console.log(data2);

      // return (data2)

      const valueSearch = data.nombre.trim().toLowerCase();
      console.log(valueSearch)
      return valueSearch.includes(search);
      console.log("-------------------");
    });

    setListaSubCompetencias(arrayFilter);
  }


  return (
    <View style={{flex: 1}}>
      <Text style={{
        fontWeight: 'bold',
        color: '#0C356A',
        fontSize: 16,
        marginHorizontal: 16,
        marginTop: 20

      }}>
        Subcompetencias
      </Text>


      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={searchText}
        // value={number}
        placeholder="Buscar"
      // keyboardType="numeric"
      />
      <FlatList data={listaSubCompetencias}
      contentContainerStyle= {{paddingBottom: 50}}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={{
              marginHorizontal: 23,
              marginVertical: 10,
            }}>              
              <Text style={{
                fontWeight: 'bold',
                color: '#0C356A',
                fontSize: 20,
              }}>
                {item.nombre}
              </Text>

              {/* Raya */}
              <View style={{
                backgroundColor: "#000",
                height: 2,
                marginTop: 10,
                marginBottom: 10,
                width: 300,
              }}>
              </View>




              {item.contenido.map((itemContenido) => (
                <View style={{
                  alignItems: 'flex-start',
                  marginVertical: 9,
                  paddingBottom: 17,
                  justifyContent: 'center',
                  backgroundColor: '#FFF0CE',
                  // marginHorizontal: 23,
                  borderRadius: 17,
                  borderColor: '#FFC436',
                  borderWidth: 2,
                }}>
                  <Image
                    source={itemContenido.image}
                    style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 150, width: '100%' }}
                  />
                  {/* Titulo */}
                  <Text style={{
                    fontWeight: 'bold',
                    color: '#0C356A',
                    fontSize: 18,
                    paddingHorizontal: 10,
                    marginTop: 10
                  }}>
                    {itemContenido.nombre}
                  </Text>

                  {/* Texto de descripcion*/}
                 {/* <Text style={{
                    // fontWeight: 'bold',
                    paddingHorizontal: 10,
                    color: '#000',
                    marginTop: 10,
                    fontSize: 14,
                  }}>
                   {/* {itemContenido.descripcion} }
                  </Text> */}

                  <View style={{
                    
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "100%"


                  }}>

                    <Button
                      onPress={() => {
                        navigation.navigate("Contenido", { contenido: itemContenido})
                        /*itemContenido.enlaces &&
                          Linking.openURL(itemContenido.enlaces) */
                      }}
                      style={{ top: 80}}
                      title="Ver mas"
                      color="#0C2566"
                    /> 
                  </View>

                </View>
              ))}


            </View>
          </TouchableOpacity>
        )} />
    </View>
  )
}

export default Subcompetencia
