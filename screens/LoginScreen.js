import React from "react";
import LoginScreen from "react-native-login-screen";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'


export default class LogInScreen extends React.Component {

    state = {
        username: "",
        password: ""
    }

    static navigationOptions = {
        title: 'LOGIN',
        header: null
    };


    render() {
        return (
            <View style={{paddingBottom: 200}}>
                <LoginScreen
                    source={{
                        uri: { backgroundColor: '#0000FF' }
                    }}

                    usernameOnChangeText={(username) => this.setState({
                        username: username,
                        password: this.state.password
                    })}

                    passwordOnChangeText={(password) => this.setState({
                        username: this.state.username,
                        password: password
                    })}
                    onPressSettings={() => alert("U wanna sign up na")}
                    onPressLogin={() => alert([this.state.username, this.state.password])}
                    logoText="Hacker Match"
                    logoComponent={null}
                    loginButtonBackgroundColor="#21a2f6"
                />
            </View>)
    }
}

