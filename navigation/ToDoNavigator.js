import 'react-native-gesture-handler';

import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TodayScreen from '../screens/TodayScreen';
import MonthScreen from '../screens/MonthScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import QuickNotesScreen from '../screens/QuickNotesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddToDoScreen from '../screens/AddToDoScreen';
import ToDoDetailScreen from '../screens/ToDoDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNav = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Today" component={TodayScreen} />
      <TopTab.Screen name="Month" component={MonthScreen} />
    </TopTab.Navigator>
  );
};

const ToDoNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="ToDoMain"
        component={TopTabNav}
        options={{
          title: 'ToDo List - Personal',
        }}
      />
      <Stack.Screen
        name="ToDoDetail"
        component={ToDoDetailScreen}
        options={({route}) => ({
          title: 'Details',
        })}
      />
    </Stack.Navigator>
  );
};

const AddToDoNav = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="AddToDo"
        component={AddToDoScreen}
        options={{
          headerLeft: () => (
            <Button title="<" onPress={() => navigation.navigate('Today')} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const BottomBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ToDo" component={ToDoNavigator} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="AddToDo" component={AddToDoNav} />
        <Tab.Screen name="QuickNotes" component={QuickNotesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default BottomBar;
