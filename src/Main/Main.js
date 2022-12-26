/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import bgImage from '/Users/devarshee/Desktop/unicode/FoodApp/assets/images/logo_1.jpg';
import CustomButtons from '../components/CustomButtons';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {useForm} from 'react-hook-form';
const Main = () => {
  const navigation = useNavigation();
  const handleSubmit = useForm();
  const onSignInPressed = data => {
    console.warn('onSignInPressed');
    navigation.navigate('SignInScreen');
  };
  const onSignUpPressed = () => {
    console.warn('onSignUpScreen');
    navigation.navigate('SignUpScreen');
  };
  return (
    <View>
      <ImageBackground
        source={bgImage}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <CustomButtons
          style={styles.appButtonContainer}
          text="Sign In"
          onPress={handleSubmit(onSignInPressed)}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButtons
          style={styles.appButtonContainer}
          text="Create an Account"
          onPress={onSignUpPressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
      </ImageBackground>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  logo: {
    height: '100%',
    width: '100%',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
