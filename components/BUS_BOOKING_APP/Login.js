import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Login() {
    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?auto=format&h=200' }}
                style={{ width: '100%', height: '100%' }}>

                <Text style={styles.Text_1}>Login</Text>
                <Text style={styles.Text_2}>No have an account? </Text><TouchableOpacity><Text style={{ fontSize: 20, color: 'red', textAlign: 'right', marginRight: 30, }}>Signup</Text></TouchableOpacity>
                <View>
                    <TextInput
                        placeholder='Email'
                        autoCorrect={false}
                        style={styles.textinput}
                    />
                    <TextInput
                        placeholder='Password'
                        autoCorrect={false}
                        style={styles.textinput}
                    />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><Text style={{ fontSize: 20, color: '#000', textAlign: 'right', marginRight: 30,marginTop:30  }}>forgot password</Text></TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 20, color: '#000', fontSize: 18, fontWeight: '650',marginTop:30 }}>Open with</Text>
                <View style={{ flexDirection: 'row', margin: 20,marginTop:80 }}>
                    <TouchableOpacity><Image source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png' }} style={{ width: 50, height: 50, borderRadius: 100, margin: 20 }}></Image></TouchableOpacity>
                    <TouchableOpacity><Image source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' }} style={{ width: 50, height: 50, borderRadius: 100, margin: 20 }}></Image></TouchableOpacity>
                    <TouchableOpacity><Image source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png' }} style={{ width: 50, height: 50, borderRadius: 100, margin: 20 }}></Image></TouchableOpacity>
                    <TouchableOpacity><Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' }} style={{ width: 50, height: 50, borderRadius: 100, margin: 20 }}></Image></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, marginTop: 0, backgroundColor: '#fff'
    },
    Text_1: { textAlign: 'center', color: 'gray', fontSize: 28, fontWeight: 'bold', marginTop: 30 },
    Text_2: { paddingLeft: 30, color: 'gray', fontSize: 23, fontWeight: 'bold', marginTop: 10 },
    textinput: {
        borderBottomWidth: 2,
        borderColor: 'rgba(27, 213, 238, 44)',
        fontSize: 22,
        fontWeight: '670',
        paddingLeft: 30,
        marginTop: 30,
        margin: 10,
        borderRadius: 10
    },
    btn: {
        width: 198,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 40,
        backgroundColor: 'rgba(27, 213, 238, 0.44)'
    },
    btntext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        margin: 10,
    },
})

