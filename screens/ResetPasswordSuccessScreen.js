import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ResetPasswordSuccessScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.logo}>
        <Image
          source={require('../assets/reset_password_successful_placeholder.png')}
          style={{width: 150, height: 200}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>Successful!</Text>
      </View>
      <View>
        <Text style={styles.subHeaderText}>
          You have successfully changed the password.
        </Text>
        <Text style={styles.subHeaderText}>
          Please use your new password when loggin in
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <View>
          <Text style={{color: 'blue'}}>
            Await confirm then return to LoginSignUp
          </Text>
        </View>
      </TouchableOpacity>
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
    marginTop: 75,
  },
  headerText: {
    fontSize: 25,
    marginTop: 30,
    marginBottom: 25,
  },
  subHeaderText: {
    fontSize: 16,
  },
});

export default ResetPasswordSuccessScreen;
