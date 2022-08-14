

import React, { useEffect } from 'react';

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './src/navigations/onBoardingStack';
import Navigation from './src/screens/LoginFlowMerchant/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';




const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Stack = createStackNavigator();

const OnBoardingScreensList = () => (
  <Stack.Navigator
    screenOptions={() => ({
      gestureEnabled: false,
      headerShown: false,
    })}
    initialRouteName="OnBoarding">
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
  </Stack.Navigator>
);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  })
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // // <SafeAreaView style={backgroundStyle}>
    // <>
    // <NavigationContainer>
    <Navigation />
    // </NavigationContainer>
    // <Signup/>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
