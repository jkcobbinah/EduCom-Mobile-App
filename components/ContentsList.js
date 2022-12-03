import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export function CustomSyllabus({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, {backgroundColor: '#ff4040' }]}>
            <FontAwesome name='book' color='white' size={40} />
            <Text style={[styles.text, {color: 'white',}]}>Syllabus</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Entypo name='chevron-right' color="white" size={40} />
            </View>
        </View>
    </TouchableOpacity>
  )
}

export function SampleNotes({onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, {backgroundColor: '#ffe135', }]}>
            <SimpleLineIcons name='note' color='white' size={40} />
            <Text style={[styles.text, {color: 'white', }]}>Sample Notes</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Entypo name='chevron-right' color="white" size={40} />
            </View>
        </View>
    </TouchableOpacity>
    )
    
}

export function VideoLessons({onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, {backgroundColor: '#00ff00', }]}>
                <FontAwesome name='youtube-play' color='white' size={40} />
                <Text style={[styles.text, {color: 'white', }]}>Video lessons</Text>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Entypo name='chevron-right' color="white" size={40} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function SampleQuestions({onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, {backgroundColor: '#00ffff', }]}>
                <FontAwesome name='question-circle-o' color='white' size={40} />
                <Text style={[styles.text, {color: 'white',}]}>Sample Questions</Text>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Entypo name='chevron-right' color="white" size={40} />
                </View>
                
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        padding: 20,
        borderRadius: 50,
    },
    text: {
        fontSize: 25,
        paddingLeft: 10,
        marginLeft: 20,
        marginTop: 5,
    }
})