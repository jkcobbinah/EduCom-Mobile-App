import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Divider } from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();

const JHSSubjects = () => {
  return (
     <Tab.Navigator screenOptions={{ tabBarScrollEnabled: false, tabBarActiveTintColor: '#964B00', tabBarInactiveTintColor: 'gray', tabBarIndicatorStyle: {backgroundColor: '#964B00', }, tabBarLabelStyle: {fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10,}, }} >
        <Tab.Screen name='JHS 1' component={JHSOne} />
        <Tab.Screen name='JHS 2' component={JHSTwo} />
        <Tab.Screen name='JHS 3' component={JHSThree} />
    </Tab.Navigator>
    
  )
}

const JHSOne = ({navigation}) =>{
    return(
        <SafeAreaView>
          <ScrollView>
           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 social')} >
             <Text style={styles.classTitle}>Social Studies</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 RME')} >
             <Text style={styles.classTitle}>Religious and Moral Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 PE')} >
             <Text style={styles.classTitle}>PE</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 french')} >
             <Text style={styles.classTitle}>French</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 BDT')} >
             <Text style={styles.classTitle}>Basic Design and Technology</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 ICT')} >
             <Text style={styles.classTitle}>ICT</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS1 GhLang')} >
             <Text style={styles.classTitle}>Ghanaian Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
           
           </ScrollView>
        </SafeAreaView>
    )
}

const JHSTwo = ({navigation}) =>{
    return(
        <SafeAreaView>
          <ScrollView>
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 social')} >
             <Text style={styles.classTitle}>Social Studies</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 RME')} >
             <Text style={styles.classTitle}>Religious and Moral Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 PE')} >
             <Text style={styles.classTitle}>PE</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 french')} >
             <Text style={styles.classTitle}>French</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 BDT')} >
             <Text style={styles.classTitle}>Basic Design and Technology</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 ICT')} >
             <Text style={styles.classTitle}>ICT</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS2 GhLang')} >
             <Text style={styles.classTitle}>Ghanaian Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
           
           </ScrollView>
        </SafeAreaView>
    )
}

const JHSThree = ({navigation}) =>{
    return(
        <SafeAreaView>
          <ScrollView>

          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 math')} >
             <Text style={styles.classTitle}>Mathematics</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 english')} >
            <Text style={styles.classTitle}>English Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 science')} >
             <Text style={styles.classTitle}>Integrated Science</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 social')} >
             <Text style={styles.classTitle}>Social Studies</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 RME')} >
             <Text style={styles.classTitle}>Religious and Moral Education</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 PE')} >
             <Text style={styles.classTitle}>PE</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 french')} >
             <Text style={styles.classTitle}>French</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 BDT')} >
             <Text style={styles.classTitle}>Basic Design and Technology</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 ICT')} >
             <Text style={styles.classTitle}>ICT</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('JHS3 GhLang')} >
             <Text style={styles.classTitle}>Ghanaian Language</Text>
           </TouchableOpacity>
           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
           
           
           </ScrollView>
        </SafeAreaView>
    )
}


export default JHSSubjects;

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