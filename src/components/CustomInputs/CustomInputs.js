import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TextStyle,
} from 'react-native';
import React from 'react';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';

const CustomInputs = () => {
  return (
    <ScrollView>
      <View style={styles.viewstyle}>
        <Text style={styles.title}> Enter mail </Text>
        <TextInput
          style={styles.container}
          placeholder="eg: something@gmail.com                ."
          keyboardType="email-address"
          autoComplete="email"
          activeUnderlineColor="green"
          /*maxLength={10}
        left={<TextInput.Icon name="account"/>}
        left={<TextInput.Icon name="form-textbox-password"/>}
        mode="outlined"
        style={{ margin: 10 }}
        activeUnderlineColor="green"*/
        />
        <Text style={styles.title}> Enter Password </Text>
        <TextInput
          style={styles.container}
          secureTextEntry={true}
          placeholder="Password               ."
          autoComplete="false"
          activeUnderlineColor="green"
          //left={<TextInput.Icon name="eye" />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    backgroundColor: '#CACFD2',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#283747',
    width: '100%',
    borderRadius: 10,
    padding: 15,
  },
  input: {},
  title: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    padding: 14,
  },
});

export default CustomInputs;
