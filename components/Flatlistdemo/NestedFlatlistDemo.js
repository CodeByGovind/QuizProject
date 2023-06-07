import { Text, View, FlatList, StyleSheet, TouchableOpacity, TextInput }
    from 'react-native'
import React, { useState } from 'react'

const DATA = [
    { id: '1', text: 'enter your question ', input: '' },
    { id: '2', text: 'enter your text ', input: '' },
    { id: '3', text: 'enter your View ', input: '' },
    { id: '4', text: 'enter your Button ', input: '' },
    { id: '5', text: 'enter your Flatlist ', input: '' },
    { id: '6', text: 'enter your question ', input: '' },
    { id: '7', text: 'enter your text ', input: '' },
    { id: '8', text: 'enter your View ', input: '' },
    { id: '9', text: 'enter your Button ', input: '' },
    { id: '10', text: 'enter your Flatlist ', input: '' },
]
export default function NestedFlatlistDemo() {
    const [data, setData] = useState(DATA)
    const [show, setShow] = useState(false)
    const [input, setInput] = useState()
    const [edit, setEdit] = useState()


    const onPressitem = (item) => {
        // setShow(true)
        setInput(item.text)
        setEdit(item.id)
    }

    const handlEdit = (edit) => {
        const newData = data.map(item => {
            if (item.id == edit) {
                item.input = input
                return item
            }
            return item
        })
        setData(newData)
    }

    const saveEdititem = () => {
        handlEdit(edit)
        setShow(false)
    }



    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder={input}
                    style={styles.textInputStyle}
                    onChangeText={(e) => setInput(e)} />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => saveEdititem()}
                >
                    <Text
                        style={styles.textStyle}>
                        save</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 200 }}
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.Viewitem}>
                            <View>
                                <Text style={styles.titleText}> {item.id} {item.text}{'\n'}{item.input} </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => onPressitem(item)}
                            >
                                <Text
                                    style={styles.textStyle}>+</Text>
                            </TouchableOpacity>
                        </View>} />

            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'space-between',
        margin: 10

    },
    titleText: {
        fontSize: 22,
        margin: 10,
        textAlign: 'center',
        // padding:5
    },
    btn: {
        backgroundColor: '#33ffff',
        borderWidth: 2, justifyContent: 'center', margin: 10
    },
    Viewitem: {
        flexDirection: 'row', justifyContent: 'space-around',
        borderWidth: 1, margin: 10
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 22, color: 'white',
        margin: 10
    },
    textInputStyle: {
        borderWidth: 1,
        fontSize: 18,
        // fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        margin: 10


    }

})