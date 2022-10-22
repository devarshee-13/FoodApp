import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Logo from '/Users/devarshee/Desktop/unicode/FoodApp/assets/images/logo_1.jpg';
import CustomInputs from '../../components/CustomInputs';

const SignInScreen = () => {
  return (
    //<ScrollView>
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.screen}>
        <Text style={styles.heading}>SIGN IN TO YOUR ACCOUNT</Text>
        <CustomInputs />
        <Text>Don't have an account? Create one</Text>
      </View>
    </View>
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    height: '30%',
  },
  screen: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#CACFD2',
  },
  heading: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SignInScreen;
