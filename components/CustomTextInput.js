import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'


//placeholder, value, textChange, secureText
const CustomTextInput = ({placeholder, value, textChange, secureText, keyboard}) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput
    style={{fontSize: 16, }}
    value={value}
    onChangeText={textChange}
    secureTextEntry={secureText}
    placeholder={placeholder} 
    keyboardType={keyboard}
  />  
  </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
})