import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import LoginNavigator from './LoginNavigator';
import BottomBar from './ToDoNavigator';

// const Stack = createStackNavigator();

const RootNavigator = props => {
  // * * * * * * * * * * change below to true to see other part of app * * * * * * * * * * * * * *

  if (false) {
    return <BottomBar />;
  }
  return <LoginNavigator />;
};

const styles = StyleSheet.create({});

export default RootNavigator;
