import React from "react";
import LoginScreen from "react-native-login-screen";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'


const passwordAnswer = "Augustine supreme"


export default class SignInScreen extends React.Component {

    state = {
        username: "",
        password: ""
    }

    static navigationOptions = {
        title: 'LOGIN',
        header: null
    };

    handleUserNameChange = (username) => {
        this.setState({username})
    }

    handlePasswordChange = (password) => {
        this.setState({password})
    }

    login = () => {
        if (this.state.password === passwordAnswer) {
            this.props.navigation.navigate("Swipe")
        } else {
            alert("Wrong password!")
        }
    }

    render() {
        return (
            <View style={{paddingBottom: 200}}>
                <LoginScreen
                    source={{
                        uri: { backgroundColor: '#0000FF' }
                    }}

                    usernameOnChangeText={(username) => this.handleUserNameChange(username)}

                    passwordOnChangeText={(password) => this.handlePasswordChange(password)}
                    onPressSettings={() => alert("U wanna sign up na")}
                    onPressLogin={this.login}
                    logoText="Hacker Match"
                    loginButtonBackgroundColor="#21a2f6"
                />
            </View>)
    }
}

