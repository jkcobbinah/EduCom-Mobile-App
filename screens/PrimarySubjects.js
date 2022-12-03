import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Divider } from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();

const PrimarySubjects = () => {
  return (
     <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true, tabBarActiveTintColor: '#964B00', tabBarInactiveTintColor: 'gray', tabBarIndicatorStyle: {backgroundColor: '#964B00', }, tabBarLabelStyle: {fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10,}, }} >
        <Tab.Screen name='Primary 1' component={PrimaryOne} />
        <Tab.Screen name='Primary 2' component={PrimaryTwo} />
        <Tab.Screen name='Primary 3' component={PrimaryThree} />
        <Tab.Screen name='Primary 4' component={PrimaryFour} />
        <Tab.Screen name='Primary 5' component={PrimaryFive} />
        <Tab.Screen name='Primary 6' component={PrimarySix} />
    </Tab.Navigator>
    
  )
}

const PrimaryOne = ({navigation}) =>{
    return(
        <SafeAreaView>
            <ScrollView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 math')} >
             <Text style={styles.classTitle}>Numeracy</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 english')}>
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 science')}>
             <Text style={styles.classTitle}>Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 OWOP')}>
             <Text style={styles.classTitle}>Our World Our People</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 RME')}>
             <Text style={styles.classTitle}>RME</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 History')}>
             <Text style={styles.classTitle}>History</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 Computing')}>
             <Text style={styles.classTitle}>Computing</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 CA')}>
             <Text style={styles.classTitle}>Creative Arts</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 PE')}>
             <Text style={styles.classTitle}>Physical Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
           </ScrollView>
        </SafeAreaView>
    )
}

const PrimaryTwo = ({navigation}) =>{
    return(
        <SafeAreaView>
            <ScrollView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 math')} >
             <Text style={styles.classTitle}>Numeracy</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 english')}>
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 science')}>
             <Text style={styles.classTitle}>Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 OWOP')}>
             <Text style={styles.classTitle}>Our World Our People</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 RME')}>
             <Text style={styles.classTitle}>RME</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 History')}>
             <Text style={styles.classTitle}>History</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 Computing')}>
             <Text style={styles.classTitle}>Computing</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 CA')}>
             <Text style={styles.classTitle}>Creative Arts</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P2 PE')}>
             <Text style={styles.classTitle}>Physical Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
        </ScrollView>
        </SafeAreaView>
    )
}

const PrimaryThree = ({navigation}) =>{
    return(
        <SafeAreaView>
            <ScrollView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 math')} >
             <Text style={styles.classTitle}>Numeracy</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 science')} >
             <Text style={styles.classTitle}>Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 OWOP')} >
             <Text style={styles.classTitle}>Our World Our People</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 RME')} >
             <Text style={styles.classTitle}>RME</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 History')}>
             <Text style={styles.classTitle}>History</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 Computing')}>
             <Text style={styles.classTitle}>Computing</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 CA')}>
             <Text style={styles.classTitle}>Creative Arts</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P3 PE')} >
             <Text style={styles.classTitle}>Physical Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
        </ScrollView>
        </SafeAreaView>
    )
}

const PrimaryFour = ({navigation}) =>{
    return(
        <SafeAreaView>
            <ScrollView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 english')}>
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 science')}>
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 OWOP')}>
             <Text style={styles.classTitle}>Our World Our People</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 RME')}>
             <Text style={styles.classTitle}>Religious and Moral Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 History')}>
             <Text style={styles.classTitle}>History</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 Computing')}>
             <Text style={styles.classTitle}>Computing</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 CA')}>
             <Text style={styles.classTitle}>Creative Arts</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P4 PE')}>
             <Text style={styles.classTitle}>Physical Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
           </ScrollView>
        </SafeAreaView>
    )
}

const PrimaryFive = ({navigation}) =>{
    return(
        <SafeAreaView>
            <ScrollView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 OWOP')} >
             <Text style={styles.classTitle}>Our World Our People</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 RME')} >
             <Text style={styles.classTitle}>Religious and Moral Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 History')}>
             <Text style={styles.classTitle}>History</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 Computing')}>
             <Text style={styles.classTitle}>Computing</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 CA')}>
             <Text style={styles.classTitle}>Creative Arts</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P5 PE')} >
             <Text style={styles.classTitle}>Physical Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
           </ScrollView>
        </SafeAreaView>
    )
}

const PrimarySix = ({navigation}) =>{
    return(
        <SafeAreaView>
            <ScrollView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 OWOP')} >
             <Text style={styles.classTitle}>Our World Our People</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 RME')} >
             <Text style={styles.classTitle}>Religious and Moral Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 History')}>
             <Text style={styles.classTitle}>History</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 Computing')}>
             <Text style={styles.classTitle}>Computing</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P6 CA')}>
             <Text style={styles.classTitle}>Creative Arts</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('P1 PE')} >
             <Text style={styles.classTitle}>Physical Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
           </ScrollView>
        </SafeAreaView>
    )
}

export default PrimarySubjects;

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