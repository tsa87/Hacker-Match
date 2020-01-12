import React from 'react';

import SignInScreen from "./screens/SignInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import SwipeScreen from "./screens/SwipeScreen"
import WelcomeScreen from "./screens/WelcomeScreen"
import MatchScreen from "./screens/MatchScreen"

import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

const MatchSwitch = createSwitchNavigator(
  {
    Match: MatchScreen
  },
  {
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={`ios-contacts`}
          size={25}
          color={tintColor}
        />
      )
    }
  }
)

const SwipeSwitch = createSwitchNavigator(
  {
    Swipe: SwipeScreen
  },
  {
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={`ios-swap`}
          size={25}
          color={tintColor}
        />
      )
    }
  }
)

const MainTab = createBottomTabNavigator(
  {
    Match: MatchSwitch,
    Swipe: SwipeSwitch,
  },
  {
    initialRouteName: "Swipe",
  }
)

const MainSwitch = createSwitchNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Main: MainTab,
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: "Welcome",
  }
)

const Container = createAppContainer(MainSwitch)

class App extends React.Component {
  state = {
    fullName: "",
    userName: "",
    passWord: "",
    github: "",
    linkedin: "",
    userExists: false,
  }

  handleFullNameChange = (text) => {
    this.setState({ fullName: text })
  }

  handleUserNameChange = (text) => {
    this.setState({ userName: text })
  }

  handlePasswordChange = (text) => {
    this.setState({ passWord: text })
  }

  handleGithubChange = (text) => {
    this.setState({ github: text })
  }

  handleLinkedinChange = (text) => {
    this.setState({ linkedin: text })
  }

  activateUser = () => {
    this.setState({userExists: true})
  }

  render() {
    return (
      <Container
        screenProps={{
          fullName: this.state.fullName,
          userName: this.state.userName,    
          passWord: this.state.passWord,
          profilePicture: this.state.profilePicture,
          github: this.state.github,
          linkedin: this.state.linkedin,
          handleFullNameChange: this.handleFullNameChange,
          handleUserNameChange: this.handleUserNameChange,
          handlePasswordChange: this.handlePasswordChange,
          handleGithubChange: this.handleGithubChange,
          handleLinkedinChange: this.handleLinkedinChange,
          activateUser: this.activateUser,
        }}
      />
    )
  }
}

export default App;
