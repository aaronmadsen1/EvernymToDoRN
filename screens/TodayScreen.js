import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text, Button, Modal} from 'react-native';

import {TODOS} from '../data/dummy-data';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const TodayScreen = ({route, navigation}) => {
  const renderToDoList = itemData => {
    return (
      <TouchableOpacity
        style={styles.cardWrapper}
        onPress={() =>
          navigation.navigate('ToDoDetail', {
            title: itemData.item.title,
            date: itemData.item.date,
            time: itemData.item.time,
            description: itemData.item.description,
            category: itemData.item.category,
            color: itemData.item.color,
          })
        }>
        <View style={styles.toDoCard}>
          <Text>{itemData.item.title}</Text>
          <Text>{itemData.item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.listContainer}>
        <FlatList data={TODOS} renderItem={renderToDoList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
  },
  listContainer: {
    width: '90%',
  },
  cardWrapper: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 3,
    shadowRadius: 3,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    elevation: 3,
  },
  toDoCard: {
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingVertical: 10,
    flex: 1,
    height: 70,
  },
});

export default TodayScreen;
