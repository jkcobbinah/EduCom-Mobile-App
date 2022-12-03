import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';

const SUBJECTS = [
    {
        id: 1,
        title: 'Mathematics',
    },
    {
        id: 2,
        title: 'English',
    },
    {
        id: 3,
        title: 'Integrated Science',
    },
    {
        id: 4,
        title: 'Social Studies',
    },
    {
        id: 5,
        title: 'RME',
    },
    {
        id: 6,
        title: 'ICT',
    },
    {
        id: 7,
        title: 'Physical Education',
    },
    {
        id: 8,
        title: 'Our World Our People',
    },
    {
        id: 9,
        title: 'BDT',
    },
    {
        id: 10,
        title: 'French',
    },
    {
        id: 11,
        title: 'Ghanaian Language',
    },
    {
        id: 12,
        title: 'Creative Arts',
    },
];

const eachSubject = ({item}) => {
    return(
    <TouchableOpacity style={styles.container}>
        <Text style={styles.classTitle}>{item.title}</Text>
    </TouchableOpacity>
    )
}

const itemSeperator = () => {
    return <View style={styles.listSeperator} />
}


const Subjects = () => {
    return(
        <SafeAreaView> 
            <View style={{flexDirection: 'row', marginLeft: 25}}>
            <Text style={{fontSize: 30, fontWeight: 'bold' , marginRight: 180, paddingLeft: 10}}>All Subjects</Text>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' color='#000' size={25} />
            </TouchableOpacity>
          </View>

            <SearchBar 
            placeholder='Search for subject here' 
            placeholderTextColor='gray'
            round='true' 
            inputContainerStyle={{borderColor: 'gray', backgroundColor: 'white', borderWidth: 1.5, margin: 5, }}
            inputStyle={{ backgroundColor: 'white', }}
            leftIconContainerStyle={{backgroundColor: 'white', }}
            containerStyle={{backgroundColor: '#FAF9F6', backfaceVisibility: 'hidden', }}
            />

            <FlatList
            keyExtractor={(item) => item.id}
            data={SUBJECTS} 
            renderItem={eachSubject}
            ItemSeparatorComponent={itemSeperator}
            />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    listSeperator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc'
    },
    container:{
        flex: 1,
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

export default Subjects;