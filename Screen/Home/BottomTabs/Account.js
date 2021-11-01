import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../components/Button';

const Account = ({navigation}) => {
  const [user, setUser] = useState('');

  const onPressLogout = () => {
    AsyncStorage.removeItem('Key').then(value => {
      navigation.replace('Login');
    });
  };

  useEffect(() => {
    try {
      AsyncStorage.getItem('Key').then(value => {
        if (value != null) {
          setUser(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../assest/user.jpeg')}
          style={styles.imguser}
        />
      </View>

      <Text style={styles.txtname}>{user}</Text>
      <View style={styles.logout}>
        <Button name="logout" clr="#F74402" onPressBtnSign={onPressLogout} />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imguser: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  profileContainer: {
    width: 150,
    height: 150,
    borderRadius: 50,
    shadowColor: '#F74402',
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  txtname: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
  },
  logout: {
    width: 100,
    marginTop: 20,
  },
});
