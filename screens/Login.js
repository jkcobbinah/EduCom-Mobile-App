import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = ({placeholder, value, textChange, secureText, keyboard}) => {
    return (
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      value={value}
      onChangeText={textChange}
      secureTextEntry={secureText}
      placeholder={placeholder}
    />  
    </View>
    )
  }

const LogInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <Image source={require('../images/undraw_education.png')} style={styles.img} />
      <Text style={styles.label}>Email</Text>
      <CustomTextInput placeholder='Email' value={email} textChange={setEmail} />
      <Text style={styles.label}>Password</Text>
      <CustomTextInput placeholder='Password' value={password} textChange={setPassword} secureText={true} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")} >
         <Text style={{color: 'white', justifyContent: 'center', fontSize: 18}}>Login</Text>
       </TouchableOpacity>
       <Button title='Forgot Password?' />
       <Text style={{fontSize: 20, marginTop: 15, marginBottom: 15, }}>Or</Text>
       <TouchableOpacity style={styles.google}>
            <FontAwesome name='google' color='#964B00' size={40} />
            <Text style={{fontSize: 20, marginLeft: 30, }}>Continue with Google</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.fb}>
            <FontAwesome name='facebook' color='#fff' size={40} />
            <Text style={{fontSize: 20, marginLeft: 30, color: '#fff' }}>Continue with Facebook</Text>
       </TouchableOpacity>
       <View style={styles.noacc}>
        <Text style={{fontSize: 16,}}>Don't have an account yet?</Text>
       <Button title='Register' />
       </View>
       
    </View>
  )
}


export default LogInScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    img: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    inputContainer: {
        width: '80%',
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    input: {
        fontSize: 16,
    },
    label: {
        fontSize: 18,
        marginTop: 10,
        alignSelf: 'flex-start',
        marginLeft: 45,
    },
    btn: {
        backgroundColor: '#964B00',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        padding: 20,
        marginTop: 15,
    },
    google: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        height: 55,
    },
    fb: {
        color: '#fff',
        backgroundColor: '#1977F2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        height: 55,
        marginTop: 15,
    },
    noacc: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    }
})