import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';
import CountDown from 'react-native-countdown-component';


const shuffleArray = (array) => {
    for (let i = array.lenght; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isloading, setIsloading] = useState(false);

    const getQuiz = async () => {
        setIsloading(true)
        const url = 'https://opentdb.com/api.php?amount=10&encode=url3986';
        const response = await fetch(url);
        const data = await response.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsloading(false)

    }
    useEffect(() => {
        getQuiz();
    }, [])

    const handleNextPress = () => {
        setQues(ques + 1)
        setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }

    const handlePrevPress = () => {
        setQues(ques - 1)
        setOptions(generateOptionsAndShuffle(questions[ques - 1]))
    }
    const generateOptionsAndShuffle = (_questions) => {
        const options = [..._questions.incorrect_answers]
        options.push(_questions.correct_answer)
        shuffleArray(options)
        return options;
    }

    const handalSelecteOption = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setScore(score + 10)
        }
        if (ques !== 9) {
            setQues(ques + 1)
            setOptions(generateOptionsAndShuffle(questions[ques + 1]))
        }
    }

    const handalShowResult = () => {
        navigation.navigate('Result', {
            score: score
        })
    }

    return (
        <View style={styles.container}>
            {isloading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Loading...</Text></View> : questions && (
                    <View style={styles.parent}>
                        <View style={styles.top}>
                            <View>
                                <Text style={{color:'black'}}> Remaining Time </Text>
                                <CountDown
                                    until={60*3}
                                    onFinish={() => alert('finished')}
                                    onPress={() => alert('hello')}
                                    size={20}
                                    timeToShow={['M','S']}
                                    digitStyle={{backgroundColor:'none',borderWidth:4,color:'black'}}

                                />
                            </View>

                            <Text style={styles.quetion}>Q.{decodeURIComponent(questions[ques].question)}</Text>
                        </View>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.OptionButton} onPress={() => handalSelecteOption(options[0])}>
                                <Text style={styles.Option}>A. {decodeURIComponent(options[0])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.OptionButton} onPress={() => handalSelecteOption(options[1])}>
                                <Text style={styles.Option}>B.{decodeURIComponent(options[1])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.OptionButton} onPress={() => handalSelecteOption(options[2])}>
                                <Text style={styles.Option}>C.{decodeURIComponent(options[2])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.OptionButton} onPress={() => handalSelecteOption(options[3])}>
                                <Text style={styles.Option}>D.{decodeURIComponent(options[3])}</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.button}
                                onPress={handlePrevPress}
                            >
                                <Text style={styles.buttonText}>PREV</Text>
                            </TouchableOpacity>
                        {ques !== 9 &&
                                <TouchableOpacity style={styles.button}
                                    onPress={handleNextPress}
                                >
                                    <Text style={styles.buttonText}>NEXT</Text>
                                </TouchableOpacity>}
                            {ques === 9 &&

                                <TouchableOpacity onPress={handalShowResult}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>submit</Text>
                                </TouchableOpacity>}
                        </View>
                    </View>
                )}

        </View>
    )
}
export default Quiz;



const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'

    }, button: {
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    quetion: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',


    },
    Option: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    },
    OptionButton: {
        padding: 10,
        margin: 6,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        width: '100%',
        borderColor: 'black',
    },
    parent: {
        height: '100%'
    }

})
