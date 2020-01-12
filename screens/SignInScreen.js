import React from "react";
import LoginScreen from "react-native-login-screen";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'


export default class SignInScreen extends React.Component {

    state = {
      username: "",
      password: "",
    }

    handleUserNameChange = (username) => {
      this.setState({username})
    }

    handlePasswordChange = (password) => {
      this.setState({password})
    }

    login = () => {
      if (this.props.screenProps.userExists){
        if (this.state.username === this.props.navigate.getParams('userName')
         && this.state.password === this.props.navigate.getParams('passWord') ){
          this.props.navigation.navigate("Swipe")
         }
        else {
          alert("Sorry! Wrong Password or Username.")
        }
      }
      else {
        alert("Please sign up first :)")
        setTimeout(() => this.props.navigation.navigate("SignUp"), 1000)
      }
    }

    render() {
        return (
            <View style={{paddingBottom: 200}}>
                <LoginScreen
                    usernameOnChangeText={(username) => this.handleUserNameChange(username)}
                    passwordOnChangeText={(password) => this.handlePasswordChange(password)}
                    onPressSettings={() => alert("U wanna sign up na")}
                    onPressLogin={this.login}
                    logoText="Hacker Match"
                />
            </View>)
    }
}

