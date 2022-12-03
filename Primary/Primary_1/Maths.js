import { StyleSheet, ImageBackground, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { CustomSyllabus, SampleNotes, SampleQuestions, VideoLessons } from '../../components/ContentsList'


const PrimaryOneMaths = ({navigation}) => {
  return (
    <SafeAreaView>
        <ImageBackground 
        source={require('../../images/istockphoto.jpeg')} 
        style={styles.img} 
        resizeMode='stretch' 
        borderBottomLeftRadius={50} 
        borderBottomRightRadius={50}
        >

            <View style={{flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={40} />
                </TouchableOpacity>

                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={styles.text}>Mathematics</Text> 
                </View>
               
            </View>
            
        </ImageBackground>

        <CustomSyllabus />
        <SampleNotes />
        <VideoLessons />
        <SampleQuestions />
        
        
    </SafeAreaView>
  )
}

export default PrimaryOneMaths

const styles = StyleSheet.create({
    img: {
        height: 250,
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4B48F4',
    }
})