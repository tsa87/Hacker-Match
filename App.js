import React from 'react';

import SignInScreen from "./screens/SignInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import SwipeScreen from "./screens/SwipeScreen"
import StartScreen from "./screens/StartScreen"
import FormScreen from "./screens/Form"

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

const MainSwitch = createSwitchNavigator(
    {
        Login: SignInScreen,
        SignUp: SignUpScreen,
        Swipe: SwipeScreen,
        Start: StartScreen,
        Form: FormScreen
    },
    {
        initialRouteName: "Start",
    }
)

const Container = createAppContainer(MainSwitch)

export default class App extends React.Component {
    render() {
        return (
            <Container />
        )
    }
}
