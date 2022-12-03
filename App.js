import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './screens/Onboarding';
import AppTabs from './screens/Home';
import LogInScreen from './screens/Login';
import PrimarySubjects from './screens/PrimarySubjects';
import JHSSubjects from './screens/JHSSubjects';
import SHSSubjects from './screens/SHSSubjects';
import PrimaryOneMaths from './Primary/Primary_1/Maths';
import PrimaryOneEnglish from './Primary/Primary_1/English';
import PrimaryOneScience from './Primary/Primary_1/Science';
import PrimaryOneOWOP from './Primary/Primary_1/OWOP';
import PrimaryOneRME from './Primary/Primary_1/RME';
import PrimaryOnePE from './Primary/Primary_1/PE';
import PrimaryOneHistory from './Primary/Primary_1/History';
import PrimaryOneComputing from './Primary/Primary_1/Computing';
import PrimaryOneCA from './Primary/Primary_1/CreativeArts';
import PrimaryTwoMaths from './Primary/Primary_2/Maths';
import PrimaryTwoEnglish from './Primary/Primary_2/English';
import PrimaryTwoScience from './Primary/Primary_2/Science';
import PrimaryTwoOWOP from './Primary/Primary_2/OWOP';
import PrimaryTwoRME from './Primary/Primary_2/RME';
import PrimaryTwoPE from './Primary/Primary_2/PE';
import PrimaryTwoHistory from './Primary/Primary_2/History';
import PrimaryTwoComputing from './Primary/Primary_2/Computing';
import PrimaryTwoCA from './Primary/Primary_2/CreativeArts';
import PrimaryThreeMaths from './Primary/Primary_3/Maths';
import PrimaryThreeEnglish from './Primary/Primary_3/English';
import PrimaryThreeScience from './Primary/Primary_3/Science';
import PrimaryThreeOWOP from './Primary/Primary_3/OWOP';
import PrimaryThreeRME from './Primary/Primary_3/RME';
import PrimaryThreePE from './Primary/Primary_3/PE';
import PrimaryThreeHistory from './Primary/Primary_3/History';
import PrimaryThreeComputing from './Primary/Primary_3/Computing';
import PrimaryThreeCA from './Primary/Primary_3/CreativeArts';
import PrimaryFourMaths from './Primary/Primary_4/Maths';
import PrimaryFourEnglish from './Primary/Primary_4/English';
import PrimaryFourScience from './Primary/Primary_4/Science';
import PrimaryFourOWOP from './Primary/Primary_4/OWOP';
import PrimaryFourRME from './Primary/Primary_4/RME';
import PrimaryFourPE from './Primary/Primary_4/PE';
import PrimaryFourHistory from './Primary/Primary_4/History';
import PrimaryFourComputing from './Primary/Primary_4/Computing';
import PrimaryFourCA from './Primary/Primary_4/CreativeArts';
import PrimaryFiveMaths from './Primary/Primary_5/Maths';
import PrimaryFiveEnglish from './Primary/Primary_5/English';
import PrimaryFiveScience from './Primary/Primary_5/Science';
import PrimaryFiveOWOP from './Primary/Primary_5/OWOP';
import PrimaryFiveRME from './Primary/Primary_5/RME';
import PrimaryFivePE from './Primary/Primary_5/PE';
import PrimaryFiveHistory from './Primary/Primary_5/History';
import PrimaryFiveComputing from './Primary/Primary_5/Computing';
import PrimaryFiveCA from './Primary/Primary_5/CreativeArts';
import PrimarySixMaths from './Primary/Primary_6/Maths';
import PrimarySixEnglish from './Primary/Primary_6/English';
import PrimarySixScience from './Primary/Primary_6/Science';
import PrimarySixOWOP from './Primary/Primary_6/OWOP';
import PrimarySixRME from './Primary/Primary_6/RME';
import PrimarySixPE from './Primary/Primary_6/PE';
import PrimarySixHistory from './Primary/Primary_6/History';
import PrimarySixComputing from './Primary/Primary_6/Computing';
import PrimarySixCA from './Primary/Primary_6/CreativeArts';
import JHSOneMaths from './JHS/JHS_1/Maths';
import JHSOneEnglish from './JHS/JHS_1/English';
import JHSOneScience from './JHS/JHS_1/Science';
import JHSOneSocial from './JHS/JHS_1/Social';
import JHSOneRME from './JHS/JHS_1/RME';
import JHSOnePE from './JHS/JHS_1/PE';
import JHSOneBDT from './JHS/JHS_1/BDT';
import JHSOneICT from './JHS/JHS_1/ICT';
import JHSOneFrench from './JHS/JHS_1/French';
import JHSOneGHLang from './JHS/JHS_1/GH_lang';
import JHSTwoMaths from './JHS/JHS_2/Maths';
import JHSTwoEnglish from './JHS/JHS_2/English';
import JHSTwoScience from './JHS/JHS_2/Science';
import JHSTwoSocial from './JHS/JHS_2/Social';
import JHSTwoRME from './JHS/JHS_2/RME';
import JHSTwoPE from './JHS/JHS_2/PE';
import JHSTwoBDT from './JHS/JHS_2/BDT';
import JHSTwoICT from './JHS/JHS_2/ICT';
import JHSTwoFrench from './JHS/JHS_2/French';
import JHSTwoGHLang from './JHS/JHS_2/GH_lang';
import JHSThreeMaths from './JHS/JHS_3/Maths';
import JHSThreeEnglish from './JHS/JHS_3/English';
import JHSThreeScience from './JHS/JHS_3/Science';
import JHSThreeSocial from './JHS/JHS_3/Social';
import JHSThreeRME from './JHS/JHS_3/RME';
import JHSThreePE from './JHS/JHS_3/PE';
import JHSThreeBDT from './JHS/JHS_3/BDT';
import JHSThreeICT from './JHS/JHS_3/ICT';
import JHSThreeFrench from './JHS/JHS_3/French';
import JHSThreeGHLang from './JHS/JHS_3/GH_lang';
import SHSOneMaths from './SHS/SHS_1/Maths';
import SHSOneEnglish from './SHS/SHS_1/English';
import SHSOneScience from './SHS/SHS_1/Science';
import SHSOneSocial from './SHS/SHS_1/Social';
import SHSTwoMaths from './SHS/SHS_2/Maths';
import SHSTwoEnglish from './SHS/SHS_2/English';
import SHSTwoScience from './SHS/SHS_2/Science';
import SHSTwoSocial from './SHS/SHS_2/Social';
import SHSThreeMaths from './SHS/SHS_3/Maths';
import SHSThreeEnglish from './SHS/SHS_3/English';
import SHSThreeScience from './SHS/SHS_3/Science';
import SHSThreeSocial from './SHS/SHS_3/Social';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false, }} >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={AppTabs} />
          <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: true, }} />
          
          {/* JHS tabs screens */}
          <Stack.Screen name="JHS" component={JHSSubjects} options={{ headerShown: true, }} />

          {/* SHS tabs screens */}
          <Stack.Screen name="SHS" component={SHSSubjects} options={{headerShown: true}} />

          {/* Primary tabs screens */}
          <Stack.Screen name='Primary' component={PrimarySubjects} options={{ headerShown: true, }} />

          {/* Primary 1 various subject screens */}
          <Stack.Screen name='P1 math' component={PrimaryOneMaths} />
          <Stack.Screen name='P1 english' component={PrimaryOneEnglish} />
          <Stack.Screen name='P1 science' component={PrimaryOneScience} />
          <Stack.Screen name='P1 OWOP' component={PrimaryOneOWOP} />
          <Stack.Screen name='P1 RME' component={PrimaryOneRME} />
          <Stack.Screen name='P1 PE' component={PrimaryOnePE} />
          <Stack.Screen name='P1 History' component={PrimaryOneHistory} />
          <Stack.Screen name='P1 Computing' component={PrimaryOneComputing} />
          <Stack.Screen name='P1 CA' component={PrimaryOneCA} />

          {/* Primary 2 various subjects screens */}
          <Stack.Screen name='P2 math' component={PrimaryTwoMaths} />
          <Stack.Screen name='P2 english' component={PrimaryTwoEnglish} />
          <Stack.Screen name='P2 science' component={PrimaryTwoScience} />
          <Stack.Screen name='P2 OWOP' component={PrimaryTwoOWOP} />
          <Stack.Screen name='P2 RME' component={PrimaryTwoRME} />
          <Stack.Screen name='P2 PE' component={PrimaryTwoPE} />
          <Stack.Screen name='P2 History' component={PrimaryTwoHistory} />
          <Stack.Screen name='P2 Computing' component={PrimaryTwoComputing} />
          <Stack.Screen name='P2 CA' component={PrimaryTwoCA} />

            {/* Primary 3 various subjects screens */}
          <Stack.Screen name='P3 math' component={PrimaryThreeMaths} />
          <Stack.Screen name='P3 english' component={PrimaryThreeEnglish} />
          <Stack.Screen name='P3 science' component={PrimaryThreeScience} />
          <Stack.Screen name='P3 OWOP' component={PrimaryThreeOWOP} />
          <Stack.Screen name='P3 RME' component={PrimaryThreeRME} />
          <Stack.Screen name='P3 PE' component={PrimaryThreePE} />
          <Stack.Screen name='P3 History' component={PrimaryThreeHistory} />
          <Stack.Screen name='P3 Computing' component={PrimaryThreeComputing} />
          <Stack.Screen name='P3 CA' component={PrimaryThreeCA} />

          {/* Primary 4 various subjects screens */}
          <Stack.Screen name='P4 math' component={PrimaryFourMaths} />
          <Stack.Screen name='P4 english' component={PrimaryFourEnglish} />
          <Stack.Screen name='P4 science' component={PrimaryFourScience} />
          <Stack.Screen name='P4 OWOP' component={PrimaryFourOWOP} />
          <Stack.Screen name='P4 RME' component={PrimaryFourRME} />
          <Stack.Screen name='P4 PE' component={PrimaryFourPE} />
          <Stack.Screen name='P4 History' component={PrimaryFourHistory} />
          <Stack.Screen name='P4 Computing' component={PrimaryFourComputing} />
          <Stack.Screen name='P4 CA' component={PrimaryFourCA} />

          {/* Primary 5 various subjects screens */}
          <Stack.Screen name='P5 math' component={PrimaryFiveMaths} />
          <Stack.Screen name='P5 english' component={PrimaryFiveEnglish} />
          <Stack.Screen name='P5 science' component={PrimaryFiveScience} />
          <Stack.Screen name='P5 OWOP' component={PrimaryFiveOWOP} />
          <Stack.Screen name='P5 RME' component={PrimaryFiveRME} />
          <Stack.Screen name='P5 PE' component={PrimaryFivePE} />
          <Stack.Screen name='P5 History' component={PrimaryFiveHistory} />
          <Stack.Screen name='P5 Computing' component={PrimaryFiveComputing} />
          <Stack.Screen name='P5 CA' component={PrimaryFiveCA} />

          {/* Primary 6 various subjects screens */}
          <Stack.Screen name='P6 math' component={PrimarySixMaths} />
          <Stack.Screen name='P6 english' component={PrimarySixEnglish} />
          <Stack.Screen name='P6 science' component={PrimarySixScience} />
          <Stack.Screen name='P6 OWOP' component={PrimarySixOWOP} />
          <Stack.Screen name='P6 RME' component={PrimarySixRME} />
          <Stack.Screen name='P6 PE' component={PrimarySixPE} />
          <Stack.Screen name='P6 History' component={PrimarySixHistory} />
          <Stack.Screen name='P6 Computing' component={PrimarySixComputing} />
          <Stack.Screen name='P6 CA' component={PrimarySixCA} />

          {/* JHS 1 various subjects screens */}
          <Stack.Screen name='JHS1 math' component={JHSOneMaths} />
          <Stack.Screen name='JHS1 english' component={JHSOneEnglish} />
          <Stack.Screen name='JHS1 science' component={JHSOneScience} />
          <Stack.Screen name='JHS1 social' component={JHSOneSocial} />
          <Stack.Screen name='JHS1 RME' component={JHSOneRME} />
          <Stack.Screen name='JHS1 PE' component={JHSOnePE} />
          <Stack.Screen name='JHS1 BDT' component={JHSOneBDT} />
          <Stack.Screen name='JHS1 ICT' component={JHSOneICT} />
          <Stack.Screen name='JHS1 french' component={JHSOneFrench} />
          <Stack.Screen name='JHS1 GhLang' component={JHSOneGHLang} />

          {/* JHS 2 various subjects screens */}
          <Stack.Screen name='JHS2 math' component={JHSTwoMaths} />
          <Stack.Screen name='JHS2 english' component={JHSTwoEnglish} />
          <Stack.Screen name='JHS2 science' component={JHSTwoScience} />
          <Stack.Screen name='JHS2 social' component={JHSTwoSocial} />
          <Stack.Screen name='JHS2 RME' component={JHSTwoRME} />
          <Stack.Screen name='JHS2 PE' component={JHSTwoPE} />
          <Stack.Screen name='JHS2 BDT' component={JHSTwoBDT} />
          <Stack.Screen name='JHS2 ICT' component={JHSTwoICT} />
          <Stack.Screen name='JHS2 french' component={JHSTwoFrench} />
          <Stack.Screen name='JHS2 GhLang' component={JHSTwoGHLang} />

          {/* JHS 3 various subjects screens */}
          <Stack.Screen name='JHS3 math' component={JHSThreeMaths} />
          <Stack.Screen name='JHS3 english' component={JHSThreeEnglish} />
          <Stack.Screen name='JHS3 science' component={JHSThreeScience} />
          <Stack.Screen name='JHS3 social' component={JHSThreeSocial} />
          <Stack.Screen name='JHS3 RME' component={JHSThreeRME} />
          <Stack.Screen name='JHS3 PE' component={JHSThreePE} />
          <Stack.Screen name='JHS3 BDT' component={JHSThreeBDT} />
          <Stack.Screen name='JHS3 ICT' component={JHSThreeICT} />
          <Stack.Screen name='JHS3 french' component={JHSThreeFrench} />
          <Stack.Screen name='JHS3 GhLang' component={JHSThreeGHLang} />

          {/* SHS 1 various subjects screens */}
          <Stack.Screen name='SHS1 math' component={SHSOneMaths} />
          <Stack.Screen name='SHS1 english' component={SHSOneEnglish} />
          <Stack.Screen name='SHS1 science' component={SHSOneScience} />
          <Stack.Screen name='SHS1 social' component={SHSOneSocial} />

          {/* SHS 2 various subjects screens */}
          <Stack.Screen name='SHS2 math' component={SHSTwoMaths} />
          <Stack.Screen name='SHS2 english' component={SHSTwoEnglish} />
          <Stack.Screen name='SHS2 science' component={SHSTwoScience} />
          <Stack.Screen name='SHS2 social' component={SHSTwoSocial} />

          {/* SHS 3 various subjects screens */}
          <Stack.Screen name='SHS3 math' component={SHSThreeMaths} />
          <Stack.Screen name='SHS3 english' component={SHSThreeEnglish} />
          <Stack.Screen name='SHS3 science' component={SHSThreeScience} />
          <Stack.Screen name='SHS3 social' component={SHSThreeSocial} />

        </Stack.Navigator>
    </NavigationContainer>

  );
}
