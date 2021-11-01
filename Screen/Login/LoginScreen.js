import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button';
import LoginHeader from '../../components/LoginHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [emailId, setEmailId] = useState('');
  const [password, setpassword] = useState('');

  const onPressLogin = async () => {
    if (emailId.length < 5) {
      alert(
        `you enter ${emailId.length} character. but required atleast 5 character `,
      );
    } else if (password.length == 0) {
      alert('Enter the password');
    } else {
      try {
        await AsyncStorage.setItem('Key', emailId);
        navigation.replace('HomeScreen');
      } catch (e) {
        // saving error
      }
    }
  };

  return (
    <View style={styles.container}>
      <LoginHeader nav={navigation} />
      <View style={styles.body}>
        <View style={styles.emailIn}>
          <TextInput
            placeholder="Id"
            style={styles.inptuser}
            value={emailId}
            onChangeText={setEmailId}
          />
        </View>

        <View style={styles.emailIn}>
          <TextInput
            placeholder="Password"
            style={styles.inptuser}
            value={password}
            onChangeText={setpassword}
          />
        </View>
        <Button
          name="Sign In"
          clr="#F74402"
          onPressBtnSign={() => onPressLogin()}
        />
        <View style={styles.forgotpassword}>
          <TouchableOpacity
            onPress={() => {
              alert('Forgot password screen under the development');
            }}>
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  emailIn: {
    backgroundColor: '#b3adad',
    height: 50,
    borderRadius: 8,
    marginBottom: 20,
    // marginTop: 10,
  },
  inptuser: {
    paddingLeft: 10,
  },
  forgotpassword: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
