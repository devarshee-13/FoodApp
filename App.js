/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from './src/screens/navigation/navigation';
import ApiData from './src/service/ApiData';
import Main from './src/Main';

const App = () => {
  return (
    <Navigation />
    // <Main />
    //<Spoonacular />
  );
};

export default App;
