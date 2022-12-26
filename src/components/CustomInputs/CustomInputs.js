import {
  View,
  Text,
  TextInput,
  StyleSheet,
  //ScrollView,
  //Image,
  //TextStyle,
} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInputs = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  viewable: {
    //backgroundColor: '#CACFD2',
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    //borderColor: '#283747',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    paddingBottom: 10,
    //paddingVertical: 20,
  },
  input: {},
  /*title: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    padding: 30,
  },*/
});

export default CustomInputs;
