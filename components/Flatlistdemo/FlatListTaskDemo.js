import { Text, View, FlatList, TouchableOpacity, TextInput }
    from 'react-native'
import React, { useState } from 'react'

export default function FlatListTaskDemo() {
    const [currentitem, setCurrentitem] = useState({})

    const Qeus = [
        {
            id: 1,
            qeus: ' Enter Your First Name ? ',
            placeholder: 'First Name',
            answer: []
        },
        {
            id: 2,
            qeus: ' Enter Your Last Name ? ',
            placeholder: 'Last Name',
            answer: []
        }, {
            id: 3,
            qeus: ' Enter Your Address ? ',
            placeholder: 'Enter Address',
            answer: []
        }, {
            id: 4,
            qeus: ' Enter Your Number ? ',
            placeholder: 'Enter Number',
            answer: []
        }, {
            id: 5,
            qeus: ' Enter Your pin code ? ',
            placeholder: 'Pin Code',
            answer: []
        },
    ]


    
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', margin: 2 }}>
            {currentitem.id > 0 &&
                <View>
                    <TextInput
                        style={{ width: '95%', borderWidth: 1, backgroundColor: 'lightgreen', marginLeft: 10, marginTop: 20, fontSize: 20, paddingHorizontal: 30, borderRadius: 8 }}
                        placeholder={currentitem.placeholder}
                        value={currentitem.answer}
                        onChangeText={(txt) =>  (txt)}
                    />
                    <TouchableOpacity style={{ width: '95%', backgroundColor: 'red', marginTop: 20, marginLeft: 10, height: 50, borderWidth: 1, padding: 8, borderRadius: 8 }}
                        onPress={() => { console.log('===onpress==>', saveItem() ); }}>
                        <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center' }}>save</Text>
                    </TouchableOpacity>
                </View>}
            <FlatList
                data={Qeus}
                renderItem={({ item }) => (
                    <View style={{
                        flex: 1,
                        backgroundColor: '#909808',
                        width: '95%',
                        margin: 10, borderRadius: 5,
                        marginTop: 20
                    }}>
                        <View style={{
                            flex: 1,
                            backgroundColor: '#909808', flexDirection: 'row',
                            margin: 5, padding: 2,
                            height: 45, width: '98%', alignItems: 'center'
                        }}>
                            <Text style={{
                                flex: 1,
                                margin: 0, padding: 2, fontSize: 20
                            }}> {item.id} {item.qeus}</Text>
                            <TouchableOpacity style={{
                                width: 35, height: 35, backgroundColor: 'red',
                                borderRadius: 5, marginRight: 5
                            }}
                                onPress={() => { setCurrentitem(item) }}>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={item.answer}
                            renderItem={({ item }) =>
                                <Text style={{ fontSize: 20, marginLeft: 30, marginBottom: 10 }}>{item.answer}</Text>
                            }
                        />


                    </View>


                )}
            />

        </View>
    )
}

  