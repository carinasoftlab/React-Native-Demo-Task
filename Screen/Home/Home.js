import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './BottomTabs/HomeScreen';
import Booking from './BottomTabs/Booking';
import Message from './BottomTabs/Message';
import News from './BottomTabs/News';
import Account from './BottomTabs/Account';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const Home = () => {
  const s = 20;
  const tabBarOptions = {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    indicatorStyle: {backgroundColor: 'red', height: '100%'},
    pressOpacity: 1,
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#f74402',
        tabBarInactiveTintColor: '#808080',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={s} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: 'Booking',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="bookmark-sharp" color={color} size={s} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="mail" color={color} size={s} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-sharp" color={color} size={s} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle" color={color} size={s} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
