import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBotomTabNavigator } from 'react-navigation-tabs';
import { Ionicon } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PostScreen from './screens/PostScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDkEcoP65vw2QjirSXcbLfU8Jcowq0Vktg",
  authDomain: "mini-kozen.firebaseapp.com",
  databaseURL: "https://mini-kozen.firebaseio.com",
  projectId: "mini-kozen",
  storageBucket: "mini-kozen.appspot.com",
  messagingSenderId: "1006630931910",
  appId: "1:1006630931910:web:7f65bc91d6f54c0303f6c7",
  measurementId: "G-C8ZTEGNQBK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomNavigator(
  {
  Home: {
    screen:HomeScreen,
    navigationOptions: {
    tabBarIcon: ({tintColor})=><Ionicons name="ios-home" size={24}color={tintColor}/>
    }
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
    tabBarIcon: ({ tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
    }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
      tabBarIcon: ({ tintColor}) => (
      <Ionicons
      name="ios-add-circle"
      size={48}
      color="#E9446A"
      style={{
      shadowColor: "#E9446A",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 10,
      shadowOpacity: 0.3
      }}
      />
      )
      }
      },
    Notification: {
    screen: NotificationScreen,
    navigationOptions: {
    tabBarIcon: ({ tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
      }
      },
     Profile: {
     screen: ProfileScreen,
     navigationOptions: {
     tabBarIcon: ({ tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor} />
      }
      }
      },
      {
    tabBarOptions: {
    activeTintColor: "#161F3D",
    inactiveTintColor: "#B8BBC4",
    showLabel: false
      }
      }
      )


const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App: AppTabNavigator,
      Auth:AuthStack
    },
  {
    initialRouteName: "Loading"
  }
)
)

