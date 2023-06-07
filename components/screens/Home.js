import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Title from './title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.imgcontainer}>
        <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.ZrNikVMeqv_hCOA_Z5xekwHaEz&pid=Api&P=0' }}
          style={styles.img} />
      </View>
      <Text style={styles.container}>  Home Screen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} 
      style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingTop:40,
    paddingHorizontal: 20,
    height:'60%',
  },
  img: {
    height: 170,
    width: 300,
    resizeMode: 'contain'
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,

  },button:{
    width:"100%",
    backgroundColor:'blue',
    padding:20,
    borderRadius:10,
    alignItems:"center",
    marginBottom:30,
  },
  buttonText:{
    fontSize:26,
    fontWeight:'600',
    color:'white',
  }

})