import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginSignUpScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../assets/login_signup_bottom_wave_placeholder.png')}
        style={{
          width: '100%',
          height: 300,
          position: 'absolute',
          bottom: 0,
        }}></ImageBackground>

      <View style={styles.logo}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../assets/spashLogo.png')}
        />
      </View>
      <View>
        <Text style={styles.headerText}>Welcome to my todo</Text>
      </View>
      <View>
        <Text style={styles.subHeaderText}>
          Whats going to happen tomorrow?
        </Text>
      </View>

      <View style={styles.logInContainer}>
        <View style={styles.logInWrapper}>
          <TouchableOpacity
            style={styles.logIn}
            onPress={() => navigation.navigate('SignIn')}>
            <View>
              <Text style={styles.logInText}>Log In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.logInWrapper}>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => navigation.navigate('SignUp')}>
            <View>
              <Text style={styles.signUpText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    marginTop: '10%',
  },
  headerText: {
    fontSize: 30,
    marginTop: 50,
    marginTop: '10%',
    marginBottom: 10,
  },
  subHeaderText: {
    paddingBottom: 20,
  },
  logInContainer: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 50,
  },
  logInWrapper: {
    width: '80%',
  },
  logIn: {
    borderRadius: 8,
    height: 50,
    marginBottom: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInText: {
    color: 'black',
    fontWeight: 'bold',
  },
  signUp: {
    borderRadius: 8,
    height: 40,

    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'white',
  },
});

export default LoginSignUpScreen;
