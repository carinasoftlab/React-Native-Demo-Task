import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';
import ImageCaro from '../../components/ImageCaro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Registered = props => {
  const navPress = () => {
    console.log(props.nav);
    props.nav.navigate('LoginPage');
  };
  return (
    <View style={styles.signreg}>
      <Text>Haven't registered yet?</Text>
      <TouchableOpacity onPress={() => navPress()}>
        <Text style={{color: '#f74402'}}>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const Login = ({navigation}) => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      await AsyncStorage.setItem('Key', userInfo.user.name);
      navigation.replace('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure();
    try {
      AsyncStorage.getItem('Key').then(value => {
        if (value != null) {
          navigation.replace('HomeScreen');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imagecaro}>
        <ImageCaro />
      </View>
      <View style={styles.body}>
        <Button
          name="Login with Google"
          clr="#3B5998"
          onPressBtnSign={() => signIn()}
        />
        <Button
          name="Sign In"
          clr="#F74402"
          onPressBtnSign={() => navigation.navigate('LoginPage')}
        />
        <Registered nav={navigation} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagecaro: {
    flex: 4,
  },
  body: {
    flex: 4.5,
    margin: 20,
  },
  signreg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
