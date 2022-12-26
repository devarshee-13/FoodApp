import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import Logo from '/Users/devarshee/Desktop/unicode/FoodApp/assets/images/logo_1.jpg';
import CustomInputs from '../../components/CustomInputs';
import CustomButtons from '../../components/CustomButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import ProfileScreen from '../ProfileScreen';

const SignInScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // const [email, setEmail] = useState({isValidEmail: true});
  // const [password, setPassword] = useState({isValidPassword: true});

  const onSignInPressed = data => {
    console.warn('onSignInPressed');
    navigation.navigate('ProfileScreen');
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };
  const onSignInGooglePressed = () => {
    console.warn('onForgotPasswordPressed');
  };
  // {
  //     const onSignInFacebookPressed = () => {
  //     console.warn('onForgotPasswordPressed');
  //   };
  //   const onSignInApplePressed = () => {
  //     console.warn('onForgotPasswordPressed');
  //   };
  // }
  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');
    navigation.navigate('SignUpScreen');
  };
  return (
    // <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.root}>
        {/* <ImageBackground source={Logo} style={styles.logo} resizeMode="cover" /> */}
        <View style={styles.screen}>
          <Text style={styles.heading}>SIGN IN TO YOUR ACCOUNT</Text>
          <Text style={styles.txt}>Email ID</Text>

          <CustomInputs
            placeholder="Email ID"
            name="Email ID"
            control={control}
            rules={{required: 'Email ID required'}}
          />
          <Text style={styles.txt}>Password</Text>
          <CustomInputs
            placeholder="Password"
            name="Password"
            control={control}
            secureTextEntry
            rules={{required: 'Password is required'}}
          />

          <CustomButtons
            text="Sign In"
            onPress={handleSubmit(onSignInPressed)}
          />

          <CustomButtons
            text="Forgot Password"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />
          <CustomButtons
            text="Sign In with Google"
            onPress={onSignInGooglePressed}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
          />
          {/* <CustomButtons
              text="Sign In with Facebook"
              onPress={onSignInFacebookPressed}
              bgColor="#E7EAF4"
              fgColor="#4765A9"
            />
           <CustomButtons
              text="Sign In with Apple"
              onPress={onSignInApplePressed}
              bgColor="#e3e3e3"
              fgColor="#363636"
            />*/}
          <CustomButtons
            text="Don't have an account? Create one"
            onPress={onSignUpPressed}
            bgColor="#e3e3e3"
            fgColor="#363636"
            type="TERTIARY"
          />
        </View>
        <ImageBackground />
      </View>
  
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: '40%',
  },
  screen: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#CACFD2',
  },
  heading: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  txt: {
    padding: 20,
    fontSize: 15,
    alignItems: 'flex-start',
  },
  errmsg: {
    fontSize: 10,
    color: 'red',
    paddingBottom: 7,
  },
});

export default SignInScreen;
