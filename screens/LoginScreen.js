import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'

export default class LoginScreen extends React.Component {
  login = () => {
    this.props.navigation.navigate('Login')
  }

  signup = () => {
    this.props.navigation.navigate('SignUp')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign Up" onPress={this.signup}/>
        <Button title="Log In" onPress={this.login}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})
