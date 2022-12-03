import React from 'react';
import { Button, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding

        onSkip={() => navigation.navigate('Home')}
        onDone={() => navigation.navigate("Home")}

    pages={[
        {
        backgroundColor: '#fff',
        image: <Image style={{width: 300, height: 250}} source={require('../images/undraw_Educator.png')} />,
        title: 'Teaching',
        subtitle: 'Have access to video lessons.',
        
        },
        {
            backgroundColor: '#fff',
            image: <Image style={{width: 300, height: 250}} source={require('../images/undraw_Mobile_development.png')} />,
            title: 'Accessibility',
            subtitle: 'Making learning easier and accessible',
            
        },
        {
            backgroundColor: '#fff',
            image: <Image style={{width: 300, height: 250}} source={require('../images/undraw_Relaxing_at_home.png')} />,
            title: 'Comfortability',
            subtitle: 'Learn in comfort and at your own pace',
            
        },  
    ]}
    />  
    )
}

export default OnboardingScreen;