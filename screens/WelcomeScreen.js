import React from "react";
import Button from "react-native-button";
import { Image, Text, View, StyleSheet } from "react-native";
import { AppStyles } from "../AppStyles";
import { AsyncStorage, ActivityIndicator } from "react-native";

import Emoji from 'react-native-emoji';


class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (

      <View style={styles.container}>
        <Image style={{height: 200, width:200}} source={require('../assets/logo.png')} />
        <Text style={styles.title}>
          Let's get hacking
          <Emoji name="muscle" style={{ fontSize: 30 }} />
        </Text>
        <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("SignIn")}
        >
          Log In
        </Button>
        <Button
          containerStyle={styles.signupContainer}
          style={styles.signupText}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          Sign Up
        </Button>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    color: AppStyles.color.white
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15
  },
  signupText: {
    color: AppStyles.color.tint
  },
});

export default WelcomeScreen;