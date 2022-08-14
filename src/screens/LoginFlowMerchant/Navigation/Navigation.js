import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../login-screen/LandingScreen';
import SignUpWelcome from '../login-screen/SignUpWelcome';
import Signup from '../login-screen/Signup';
import MerchantRegistration from '../login-screen/MerchantRegistration';
import BusinessInfo from '../login-screen/BusinessInfo';
import BusinessAdr from '../login-screen/BusinessAdr';
import FurtherAss from '../login-screen/FurtherAss';
import SetPasscode from '../login-screen/SetPasscode';
import PrivacyPolicy from '../login-screen/PrivacyPolicy';
import TermsandConditions from '../login-screen/TermsandConditions';
import RegisterationSuccess from '../login-screen/RegisterationSuccess';
import Login from '../login-screen/Login';
import ForgetPasscode from '../login-screen/ForgetPasscode';
import ResetPasscode from '../login-screen/ResetPasscode';
import BookingInfoMainMenu from '../login-screen/BookingInfoMainMenu';
import WelcomeUser from '../login-screen/WelcomeUser';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={() => ({
    headerShown: false,
  })} >
        {/* <Stack.Screen name="LandingScreen" component={LandingScreen} /> */}
  
        <Stack.Screen name="SignUpWelcome" component={SignUpWelcome} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MerchantRegistration" component={MerchantRegistration} />
        <Stack.Screen name="BusinessInfo" component={BusinessInfo} />
        <Stack.Screen name="BusinessAdr" component={BusinessAdr} />
        <Stack.Screen name="FurtherAss" component={FurtherAss} />
        <Stack.Screen name="SetPasscode" component={SetPasscode} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsandConditions" component={TermsandConditions} />
        <Stack.Screen name="RegisterationSuccess" component={RegisterationSuccess} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPasscode" component={ForgetPasscode} />
        <Stack.Screen name="ResetPasscode" component={ResetPasscode} />
        <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
        <Stack.Screen name="BookingInfoMainMenu" component={BookingInfoMainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations