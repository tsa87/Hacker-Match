import React from 'react';

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
