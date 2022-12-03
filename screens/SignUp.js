import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CustomTextInput } from '../components/CustomTextInput';

const SignUp = () => {

    const [firstName, setFisrtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState('')

  return (
    <View>
        <Text>Create Account</Text>
        <Image source={require('../images/undraw_education.png')} />
      <Text>First Name</Text>
      <CustomTextInput placeholder="First Name" value={firstName} onChangeText={setFisrtName} />
      <Text>Last Name</Text>
      <CustomTextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <Text>Email</Text>
      <CustomTextInput placeholder="example@email.com" value={email} onChangeText={setEmail} />
      <Text>Username</Text>
      <CustomTextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <Text>Phone</Text>
      <CustomTextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType='numeric' />
    </View>
  )
}

const styles = StyleSheet.create({})


export default SignUp;