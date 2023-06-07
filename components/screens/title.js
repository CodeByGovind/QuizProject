import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizzler</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 33,
        paddingVertical: 16,
        justifyContent:"center",
        alignSelf:'center',
    },
    container: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '90%',
      }
})