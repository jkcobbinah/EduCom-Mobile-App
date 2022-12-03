import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { CustomSyllabus, SampleNotes, SampleQuestions, VideoLessons } from '../../components/ContentsList';

const JHSThreeICT = ({navigation}) => {
  return (
    <SafeAreaView>
    <ImageBackground 
    source={require('../../images/ICT_img.png')} 
    style={styles.img} 
    resizeMode='contain' 
    borderBottomLeftRadius={50} 
    borderBottomRightRadius={50}
    >

        <View style={{flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name='chevron-left'  size={40} />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.text}>Information & Communication Technology</Text> 
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

export default JHSThreeICT;

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