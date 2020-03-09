import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}>Categories Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default CategoriesScreen;
