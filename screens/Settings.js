import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = ({ navigation }) => {
  return (
    <View style={{marginTop: 100}}>
      <Button title='Home' onPress={() => navigation.navigate('Home')} />
      <Button title='log in' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({})