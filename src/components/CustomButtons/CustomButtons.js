import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButtons = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.screenContainer,
        styles['container_${type}'],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles['text_${type}'],
          fgColor ? {color: fgColor} : {},
        ]}>
        {' '}
        {text}{' '}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3871F3',
    justifyContent: 'center',
    padding: 16,
    marginVertical: 5,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  container_PRIMARY: {
    backgroundColor: '#3871F3',
    paddingTop: 30,
  },
  container_TERTIARY: {},

  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButtons;
