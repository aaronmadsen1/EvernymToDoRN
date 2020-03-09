import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginSignUpScreen from '../screens/LoginSignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ResetPasswordSuccessScreen from '../screens/ResetPasswordSuccessScreen';

const Stack = createStackNavigator();

const LoginNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginSignUp"
          component={LoginSignUpScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="ResetPasswordSuccess"
          component={ResetPasswordSuccessScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginNavigator;
