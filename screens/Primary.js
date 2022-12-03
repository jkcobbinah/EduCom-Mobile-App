// import React from 'react';
// import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Divider } from 'react-native-elements';


// const PrimaryClasses = ({navigation}) => {
//     return(
//         <SafeAreaView>
//         <View style={{flexDirection: 'row', marginLeft: 25}}>
//             <Text style={{fontSize: 30, fontWeight: 'bold' , marginRight: 230, paddingLeft: 10}}>Primary</Text>
//             <TouchableOpacity>
//               <Ionicons name='notifications-outline' color='#000' size={25} />
//             </TouchableOpacity>
//           </View>
//           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />

//           <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Primary Subjects')} >
//             <Text style={styles.classTitle}>Primary One</Text>
//           </TouchableOpacity>
//           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

//           <TouchableOpacity style={styles.container}>
//             <Text style={styles.classTitle}>Primary Two</Text>
//           </TouchableOpacity>
//           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

//           <TouchableOpacity style={styles.container}>
//             <Text style={styles.classTitle}>Primary Three</Text>
//           </TouchableOpacity>
//           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

//           <TouchableOpacity style={styles.container}>
//             <Text style={styles.classTitle}>Primary Four</Text>
//           </TouchableOpacity>
//           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

//           <TouchableOpacity style={styles.container}>
//             <Text style={styles.classTitle}>Primary Five</Text>
//           </TouchableOpacity>
//           <Divider orientation='horizontal' color='gray' style={{marginTop: 15,}} />

//           <TouchableOpacity style={styles.container}>
//             <Text style={styles.classTitle}>Primary Six</Text>
//           </TouchableOpacity>
//           <Divider orientation='horizontal' color='gray' style={{marginTop: 18,}} />
  
//         </SafeAreaView>
        
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         //flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 8,
//     },
//     classTitle: {
//         fontWeight: '500',
//         fontSize: 25,
//         marginLeft: 15,
//         padding: 20,
//         color: '#964B00',
//     }
// })

// export default PrimaryClasses;