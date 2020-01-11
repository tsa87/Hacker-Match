import React from "react";
import LoginScreen from "react-native-login-screen";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'


export default class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'LOGIN',
    header: null
  };


  render() {
    return (

        <View style={{paddingBottom: 200}}>
          <LoginScreen
              onPressLogin={() => alert("The username and the password you entered does not match.")}
              logoText="Hacker Match"
              logoComponent={null}
          />
        </View>)
  }
}




