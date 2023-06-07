import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({ navigation, route }) => {
  const { score } = route.params

  const resultBanner = score > 33 ?   'https://tse1.mm.bing.net/th?id=OIP.qx32HmZXFoie3CBYOryQNgHaE7&pid=Api&P=0':"https://tse1.mm.bing.net/th?id=OIP.GxHxutqJhK1inAdNoz7HPQHaHa&pid=Api&P=0"

  return (
    <View style={styles.container}>
      <Text style={styles.Option}>Result </Text>
      <Text style={styles.Option}>{score}</Text>

      <View style={styles.imgcontainer}>
        <Image source={{ uri: resultBanner, }}
          style={styles.img}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.Option}> Go to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;

const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  img: {
    height: 280,
    width: 300,
    resizeMode: 'contain',
    margin: 30

  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    flex: 1,


  }, Option: {
    fontSize: 38,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',

  }, button: {
    width: "80%",
    backgroundColor: 'silver',
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 20,
  },

})