import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import ProfileScreen from '../ProfileScreen';
import HomeScreen from '../HomeScreen';
import Tabs from './Tabs';
import ApiData from '../../service/ApiData';
import Main from '../../Main';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen component={SignInScreen} name="SignInScreen" />
        <Stack.Screen component={SignUpScreen} name="SignUpScreen" />
        <Stack.Screen component={Tabs} name="Tabs" />
        <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={ApiData} name="ApiData" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
