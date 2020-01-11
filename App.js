import React from 'react';

import LoginScreen from "./screens/LoginScreen"
import SignUpScreen from "./screens/SignUpScreen"
import SwipeScreen from "./screens/SwipeScreen"


import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

const MainSwitch = createSwitchNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Swipe: SwipeScreen,
  },
  {
    initialRouteName: "Login",
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
