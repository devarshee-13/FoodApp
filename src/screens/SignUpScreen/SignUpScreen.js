import React, {useState} from 'react';

import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Logo from '/Users/devarshee/Desktop/unicode/FoodApp/assets/images/logo_1.jpg';
import CustomInputs from '../../components/CustomInputs';
import CustomButtons from '../../components/CustomButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import Tabs from '../navigation/Tabs';
const SignUpScreen = () => {
  //   const [username, setUsername] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [passwordRepeat, setPasswordRepeat] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const pwd = watch('Password');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn('Register');
    navigation.navigate('Tabs');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.heading}>CREATE AN ACCOUNT</Text>

        <Text style={styles.title}>Username</Text>
        <CustomInputs
          placeholder="Username"
          name="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />

        <Text style={styles.title}>Email ID</Text>
        <CustomInputs
          placeholder="Email"
          name="Email ID"
          control={control}
          keyboardType="email-address"
          rules={{
            required: 'Email is required',
            pattern: {
              required: 'Email is required',
              message: 'Email is invalid',
            },
          }}
        />
        <Text style={styles.title}>Password</Text>
        <CustomInputs
          placeholder="Password"
          name="Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <Text style={styles.title}>Re-enter Password</Text>

        <CustomInputs
          placeholder="Re-enter Password"
          name="Re-enter Password"
          control={control}
          secureTextEntry={true}
          keyboardType="default"
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />
        <CustomButtons
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text style={styles.txt}>
          {' '}
          By registering, you accpet our{' '}
          <Text style={styles.link}>Terms of Use </Text>and{' '}
          <Text style={styles.link}> Privacy Policy</Text>{' '}
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    //alignItems: 'center',
    padding: 25,
  },
  logo: {
    height: '30%',
  },
  screen: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#CACFD2',
  },
  heading: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 27,
    margin: 10,
    textAlign: 'center',
  },
  title: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
  },
  txt: {
    padding: 5,
    //fontWeight: 'bold',
    fontSize: 12,
    alignItems: 'flex-start',
  },
  link: {
    color: 'red',
    fontSize: 12,
  },
});

export default SignUpScreen;
