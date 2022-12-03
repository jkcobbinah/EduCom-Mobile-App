import { StyleSheet, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import React from 'react';



const Categories = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textLogo}>Welcome to the EduCom mobile application.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Primary')}>
            <Text>Primary</Text>
        </TouchableOpacity>
        <Button
        title='Primary'
        onPress={() => navigation.navigate("Primary")}
        />
        <Button
        title='JHS'
        onPress={() => navigation.navigate('JHS')}
        />
        <Button
        title='SHS'
        onPress={() => navigation.navigate('SHS')}
        />
    </SafeAreaView>
  )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    img: {
    width: 200,
    height: 145,
    },
    textLogo: {
    color: '#964B00',
    fontSize: 20,
    fontWeight: 'bold',
    }
})