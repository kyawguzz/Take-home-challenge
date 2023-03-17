import React from "react";
import { ScrollView } from "react-native";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Login = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Image
          source={require('../../assets/pokemon.jpeg')}
          style={{ width: 100, height: 100, borderRadius: 50, }}
        />
      </View>
      <View style={styles.loginInputs}>
        <TextInput
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2129',
  },
  loginHeader: {
    marginHorizontal: 30,
    marginTop: 80
  },
  headerText: {
    fontSize: 40,
    color: '#0066cc',
    textAlign: 'center'
  },
  loginInputs: {
    marginTop: 40,
    marginHorizontal: 35
  },
  input: {
    width: 330,
    height: 48,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,1)',
    marginBottom: 30,
    paddingLeft: 25,
    fontFamily: 'Inter-Regular',
  },
  loginButton: {
    backgroundColor: '#FBDF33',
    borderRadius: 30,
    width: 200,
    height: 45,
    marginTop: 2,
    marginBottom: 20,
    position: "absolute",
    marginTop: -22,
    alignSelf: "center"
  },
  loginText: {
    marginTop: 10,
    fontSize: 18,
    color: '#000000',
    textAlign: 'center'
  },
  footer: {
    marginTop: 50,
    position: "relative",
    backgroundColor: '#1c2a2a',
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  forgotText: {
    fontFamily: 'Inter-Regular',
    color: "#ffffff",
    alignSelf: "center"
  },
});

export default Login;
