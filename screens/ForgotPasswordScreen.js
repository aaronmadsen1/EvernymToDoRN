import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <View>
            <Text style={styles.headerText}>Forgot password</Text>
          </View>
          <View>
            <Text style={styles.subHeaderText}>
              Please enter your email below to recieve your password reset
              instructions
            </Text>
          </View>

          <View style={styles.inputsContainer}>
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
          </View>

          <View style={styles.logInContainer}>
            <View style={styles.logInWrapper}>
              <TouchableOpacity
                style={styles.logIn}
                onPress={() => navigation.navigate('ResetPassword')}>
                <View>
                  <Text style={styles.logInText}>Send Request</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
  },
  headerText: {
    fontSize: 40,
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
  },
  subHeaderText: {
    paddingBottom: 40,
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
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 3,
  },
  inputHeaders: {
    fontSize: 16,
  },
  inputField: {
    elevation: 1,
    height: '100%',
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

export default ForgotPasswordScreen;
