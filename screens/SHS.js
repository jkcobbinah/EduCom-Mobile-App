import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';


const SHSClasses = ({navigation}) => {
    return(
        <SafeAreaView>
        <View style={{flexDirection: 'row', marginLeft: 25}}>
            <Text style={{fontSize: 30, fontWeight: 'bold' , marginRight: 280, paddingLeft: 10}}>SHS</Text>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' color='#000' size={25} />
            </TouchableOpacity>
          </View>
          <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Primary')} >
            <Text style={styles.classTitle}>SHS One</Text>
          </TouchableOpacity>
          <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

          <TouchableOpacity style={styles.container}>
            <Text style={styles.classTitle}>SHS Two</Text>
          </TouchableOpacity>
          <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

          <TouchableOpacity style={styles.container}>
            <Text style={styles.classTitle}>SHS Three</Text>
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
        paddingVertical: 10,
    },
    classTitle: {
        fontWeight: '500',
        fontSize: 25,
        marginLeft: 15,
        padding: 20,
        color: '#964B00',
    }
})

export default SHSClasses;