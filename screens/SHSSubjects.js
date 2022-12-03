import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Divider } from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();

const SHSSubjects = () => {
  return (
     <Tab.Navigator screenOptions={{ tabBarScrollEnabled: false, tabBarActiveTintColor: '#964B00', tabBarInactiveTintColor: 'gray', tabBarIndicatorStyle: {backgroundColor: '#964B00', }, tabBarLabelStyle: {fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10,}, }} >
        <Tab.Screen name='SHS 1' component={SHSOne} />
        <Tab.Screen name='SHS 2' component={SHSTwo} />
        <Tab.Screen name='SHS 3' component={SHSThree} />
    </Tab.Navigator>
    
  )
}

const SHSOne = ({navigation}) =>{
    return(
        <View>
        <SafeAreaView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS1 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS1 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS1 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS1 social')} >
             <Text style={styles.classTitle}>Social Studies</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

        </SafeAreaView>
        </View>
    )
}

const SHSTwo = ({navigation}) =>{
    return(
        <View>
        <SafeAreaView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS2 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS2 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS2 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS2 social')} >
             <Text style={styles.classTitle}>Social Studies</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

        </SafeAreaView>
        </View>
    )
}

const SHSThree = ({navigation}) =>{
    return(
        <View>
        <SafeAreaView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS3 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS3 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS3 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SHS3 social')} >
             <Text style={styles.classTitle}>Social Studies</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

        </SafeAreaView>
        </View>
    )
}


export default SHSSubjects;

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    classTitle: {
        fontWeight: '500',
        fontSize: 25,
        marginLeft: 15,
        padding: 20,
        color: '#964B00',
    }
})