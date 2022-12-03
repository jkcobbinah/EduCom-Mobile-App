import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';


const JHSClasses = ({ navigation }) => {
    return(
        <SafeAreaView>
        <View style={{flexDirection: 'row', marginLeft: 25}}>
            <Text style={{fontSize: 30, fontWeight: 'bold' , marginRight: 280, paddingLeft: 10}}>JHS</Text>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' color='#000' size={25} />
            </TouchableOpacity>
          </View>
          <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Primary')} >
            <Text style={styles.classTitle}>JHS One</Text>
          </TouchableOpacity>
          <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

          <TouchableOpacity style={styles.container}>
            <Text style={styles.classTitle}>JHS Two</Text>
          </TouchableOpacity>
          <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

          <TouchableOpacity style={styles.container}>
            <Text style={styles.classTitle}>JHS Three</Text>
          </TouchableOpacity>
          <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />
 
        </SafeAreaView>

    )
}

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

export default JHSClasses;