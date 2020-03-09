import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ToDoDetailScreen = ({route, navigation}) => {
  const {title} = route.params;
  const {date} = route.params;
  const {time} = route.params;
  const {description} = route.params;
  const {category} = route.params;
  const {color} = route.params;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Created By</Text>
          <Text style={styles.itemText}>Jane Doe</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Due Date</Text>
          <Text style={styles.itemText}>
            {date}, {time}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Description</Text>
          <Text style={styles.itemText}>{description}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Category</Text>
          <Text style={styles.itemText}>{category}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Color</Text>
          <Text style={styles.itemText}>{color}</Text>
        </View>
        <View style={styles.logInWrapper}>
          <TouchableOpacity style={styles.logIn} onPress={() => {}}>
            <View>
              <Text style={styles.logInText}>Complete Task</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    width: '90%',
    marginVertical: 30,
  },
  titleText: {
    fontSize: 24,
  },
  itemContainer: {
    width: '90%',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    padding: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  itemHeader: {
    fontSize: 18,
    color: '#777',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
  logInWrapper: {
    width: '80%',
    marginTop: 20,
  },
  logIn: {
    borderRadius: 8,
    height: 50,
    marginBottom: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ToDoDetailScreen;
