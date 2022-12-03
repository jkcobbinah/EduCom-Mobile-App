import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { CustomSyllabus, SampleNotes, SampleQuestions, VideoLessons } from '../../components/ContentsList';

const PrimarySixComputing = ({navigation}) => {
  return (
    <SafeAreaView>
    <ImageBackground 
    source={require('../../images/Computing.png')} 
    style={styles.img} 
    resizeMode='stretch' 
    borderBottomLeftRadius={50} 
    borderBottomRightRadius={50}
    >

        <View style={{flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name='chevron-left'  size={40} />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.text}>Computing</Text> 
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

export default PrimarySixComputing;

const styles = StyleSheet.create({
    img: {
        height: 250,
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    }
})