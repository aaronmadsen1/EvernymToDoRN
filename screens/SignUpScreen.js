import React from 'react';
import {ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUpScreen = ({navigation}) => {
  return (
    // <View>
    //   <Text style={{fontSize: 35}}>SignUpScreen</Text>
    //   <Button title="pop to top" onPress={() => navigation.popToTop()} />
    // </View>
    <ScrollView>
      <View style={styles.screen}>
        <View>
          <Text style={styles.headerText}>Create account</Text>
        </View>
        <View>
          <Text style={styles.subHeaderText}>Sign up to continue</Text>
        </View>

        <View style={styles.inputsContainer}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputTitle}>
              <Text style={{fontSize: 17}}>Full name</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputField}
                id="fullName"
                label="fullName"
                placeholder="Name"
                keyboardType="default"
                underlineColorAndroid="transparent"
                borderBottomWidth={0}
              />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputTitle}>
              <Text style={styles.inputHeaders}>Email</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputField}
                id="email"
                label="Email"
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                borderBottomWidth={0}
              />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputTitle}>
              <Text style={styles.inputHeaders}>Password</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputField}
                id="password"
                label="password"
                placeholder="Enter password"
                keyboardType="default"
                underlineColorAndroid="transparent"
                borderBottomWidth={0}
              />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputTitle}>
              <Text style={styles.inputHeaders}>Confirm password</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputField}
                id="password"
                label="password"
                placeholder="Confirm password"
                keyboardType="default"
                underlineColorAndroid="transparent"
                borderBottomWidth={0}
              />
            </View>
          </View>
        </View>

        <View style={styles.logInContainer}>
          <View style={styles.logInWrapper}>
            <TouchableOpacity
              style={styles.logIn}
              onPress={() => navigation.popToTop()}>
              <View>
                <Text style={styles.logInText}>Log In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
  },
  headerText: {
    fontSize: 40,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  subHeaderText: {
    paddingBottom: 20,
    marginLeft: 20,
  },
  inputsContainer: {
    alignItems: 'center',
  },
  inputWrapper: {
    width: '90%',
    paddingVertical: 10,
  },
  inputTitle: {
    marginBottom: 5,
  },
  inputHeaders: {
    fontSize: 16,
  },
  input: {
    height: 50,

    borderBottomColor: '#dddddd',
    borderBottomWidth: 3,
  },
  inputField: {
    elevation: 1,
    height: '100%',
  },
  forgotPassword: {
    paddingTop: 10,
    marginRight: 30,
    alignItems: 'flex-end',
  },
  logInContainer: {
    alignItems: 'center',
  },
  logInWrapper: {
    width: '80%',
    marginTop: 50,
  },
  logIn: {
    borderRadius: 8,
    height: 40,
    backgroundColor: 'blue',

    alignItems: 'center',
    justifyContent: 'center',
  },
  logInText: {
    color: 'white',
  },
});

export default SignUpScreen;
