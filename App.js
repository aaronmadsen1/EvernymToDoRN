import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import RootNavigator from './navigation/RootNavigator';
// import LoginNavigator from './navigation/LoginNavigator';

const App: () => React$Node = () => {
  return <RootNavigator />;
  // return <LoginNavigator />;
};

const styles = StyleSheet.create({});

export default App;
