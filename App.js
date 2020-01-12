import React from 'react';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SwipeScreen from './screens/SwipeScreen';
import StartScreen from './screens/StartScreen';
import FormScreen from './screens/Form';
import UserScreen from './screens/UserScreen';

import {
  createSwitchNavigator,
  createAppContainer,
  View,
} from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      career: '',
      location: '',
      gitLink: '',
      resumeLink: '',
      linkedinLink: '',
    };
  }
  handleLogIn(
    firstName,
    lastName,
    career,
    location,
    gitLink,
    resumeLink,
    linkedinLink
  ) {
    this.setState({
      firstName,
      lastName,
      career,
      location,
      gitLink,
      resumeLink,
      linkedinLink,
    });

    alert(this.state);
  }

  render() {
    let MainSwitch = createSwitchNavigator(
      {
        Login: SignInScreen,
        SignUp: SignUpScreen,
        Swipe: SwipeScreen,
        Start: StartScreen,
        Form: FormScreen,
        User: UserScreen,
      },
      {
        initialRouteName: 'Start',
      }
    );

    const Container = createAppContainer(MainSwitch)
    return (<Container/>);
  }
}
