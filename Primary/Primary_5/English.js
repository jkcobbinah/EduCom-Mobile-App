import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { CustomSyllabus, SampleNotes, SampleQuestions, VideoLessons } from '../../components/ContentsList';

const PrimaryFiveEnglish = ({navigation}) => {
  return (
    <SafeAreaView>
    <ImageBackground 
    source={require('../../images/English_kids_img.png')} 
    style={styles.img} 
    resizeMode='contain' 
    borderBottomLeftRadius={50} 
    borderBottomRightRadius={50}
    >

        <View style={{flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name='chevron-left' size={40} />
            </TouchableOpacity>
           
        </View>
        <View style={{flex: 1, flexDirection: 'column-reverse', alignItems: 'center', justifyContent: 'flex-start'}}>
            <Text style={styles.text}>English Language</Text> 
        </View>
    </ImageBackground>

    <CustomSyllabus />
    <SampleNotes />
    <VideoLessons />
    <SampleQuestions />
       
</SafeAreaView>
    
  )
}

export default PrimaryFiveEnglish;

const styles = StyleSheet.create({
    img: {
        height: 250,
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    }
})