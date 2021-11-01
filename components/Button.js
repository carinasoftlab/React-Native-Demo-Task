import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPressBtnSign}
      style={{
        backgroundColor: props.clr,
        height: 50,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      }}>
      <Text style={{color: '#fff', fontSize: 16}}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
