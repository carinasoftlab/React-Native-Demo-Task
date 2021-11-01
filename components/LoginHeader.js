import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginHeader = props => {
  const onBackPress = () => {
    props.nav.replace('Login');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onBackPress()}>
        <Entypo name="arrow-long-left" size={20} color="#F74402" />
      </TouchableOpacity>
      <Text style={styles.navTitle}>Sign In</Text>
      <Text></Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  navTitle: {
    fontSize: 16,
  },
});
