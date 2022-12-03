import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation'
import Subjects from './Explore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from './Settings';
import Categories from './Categories';
import { TouchableOpacity } from 'react-native-gesture-handler';




const HomeScreen = ({ navigation }) => {
    return(
        <SafeAreaView style={{flex: 1, justifyContent: 'top', alignItems: 'center'}}>
          <View style={styles.topbar}>
            <Text style={{fontSize: 20, marginRight: 250}}>Good day! </Text>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' color='#000' size={25} />
            </TouchableOpacity>
          </View>
          <View style={[styles.topbar, {marginTop: 30}]}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 200}}>Categories</Text>
            <TouchableOpacity style={{ backgroundColor: '#964B00', borderRadius: 20}} onPress={() => navigation.navigate('Categories')} >
              <Text style={{color: 'white', paddingTop: 10, paddingBottom: 10, paddingLeft: 18, paddingRight: 18, fontWeight: 'bold' }}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.category}>
            <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('Primary')}>
              <Text style={styles.categoryText}>Primary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('JHS')}>
              <Text style={styles.categoryText}>JHS</Text>
            </TouchableOpacity>
            </View>

            <View style={[styles.category, {margin: -270}]}>
            <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('SHS')}>
              <Text style={styles.categoryText}>SHS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={[styles.categoryText, {fontSize: 18}]}>TECH/VOC</Text>
            </TouchableOpacity>
          </View>
        
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'top'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 30, marginLeft: -180 }}>Recently Added</Text>
        </View>
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'top',
      justifyContent: 'center',
    },
    topbar: {
      flexDirection: 'row',
      marginTop: 20,
      
    },
    img: {
      width: 200,
      height: 145,
    },
    textLogo: {
      color: '#964B00',
      fontSize: 20,
      fontWeight: 'bold',
    },
    category: {
      flex: 1,
      flexDirection: 'row',
    },
    categoryItem: {
      margin: 8,
      borderRadius: 10,
      backgroundColor: '#964B00',
      width: 160,
      height: 120
    },
    categoryText: {
      padding: 40,
      textAlign: "center",
      borderRadius: 10,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });

const Tab = createBottomTabNavigator();

  const AppTabs = () => {
    return(
      <Tab.Navigator 
      initialRouteName='HomeTab'  
      screenOptions={{ headerShown: false, tabBarLabelStyle: {fontSize: 16} , tabBarActiveTintColor: '#964B00', tabBarInactiveTintColor: 'gray',  }}>
        
        
        <Tab.Screen name="HomeTab" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Foundation name="home"  color={color} size={30} />
          ),
        }} />

        <Tab.Screen 
        name="Categories" 
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <Ionicons name='grid' color={color} size={30} />
          )
        }} />
        
        <Tab.Screen 
        name="Explore" 
        component={Subjects}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='search' color={color} size={30} />
          ),
        }}
         />

        <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Ionicons name='settings-sharp' color={color} size={30} />
          )
        }} />

      </Tab.Navigator>
    )

  }

export default AppTabs;