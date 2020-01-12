import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'react-native-button';
import { AppStyles } from '../AppStyles';
import { Header } from 'react-navigation-stack';

import Emoji from 'react-native-emoji';

class SignupScreen extends React.Component {

  state = {
    python: false,
    java: false,
    javascript: false,
    machineLearning: false,
    reactNative: false,
  };

  submit = () => {
    this.props.navigation.navigate('Swipe')
  } 

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView
        keyboardVerticalOffset = {Header.HEIGHT + 20}
          style={styles.container}
          behavior="padding"
          enabled={true}>
          <Text style={[styles.title, styles.leftTitle]}>
            Create Your Hacker Profile
            <Emoji name="sign_of_the_horns" style={{ fontSize: 40 }} />
          </Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Full Name"
              onChangeText={text =>
                this.props.screenProps.handleFullNameChange(text)
              }
              value={this.props.screenProps.fullName}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="User Name"
              onChangeText={text =>
                this.props.screenProps.handleUserNameChange(text)
              }
              value={this.props.screenProps.userName}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Password"
              onChangeText={text =>
                this.props.screenProps.handlePasswordChange(text)
              }
              secureTextEntry={true}
              value={this.props.screenProps.password}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Github Username (Optional)"
              onChangeText={text =>
                this.props.screenProps.handleGithubChange(text)
              }
              value={this.props.screenProps.github}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Linkedin UserId (Optional)"
              onChangeText={text =>
                this.props.screenProps.handleLinkedinChange(text)
              }
              value={this.props.screenProps.linkedin}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.normal}>List your skills!</Text>
          <View style={styles.fixToText}>
            {this.state.python === true && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ python: false })}>
                Python
                <Emoji name="white_check_mark" style={{ fontSize: 15 }} />
              </Button>
            )}
            {this.state.python === false && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ python: true })}>
                Python
                <Emoji
                  name="negative_squared_cross_mark"
                  style={{ fontSize: 15 }}
                />
              </Button>
            )}

            {this.state.machineLearning === true && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ machineLearning: false })}>
                Machine Learning
                <Emoji name="white_check_mark" style={{ fontSize: 15 }} />
              </Button>
            )}
            {this.state.machineLearning === false && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ machineLearning: true })}>
                Machine Learning
                <Emoji
                  name="negative_squared_cross_mark"
                  style={{ fontSize: 15 }}
                />
              </Button>
            )}
          </View>
          <View style={styles.fixToText}>
            {this.state.reactNative === true && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ reactNative: false })}>
                React Native
                <Emoji name="white_check_mark" style={{ fontSize: 15 }} />
              </Button>
            )}
            {this.state.reactNative === false && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ reactNative: true })}>
                React Native
                <Emoji
                  name="negative_squared_cross_mark"
                  style={{ fontSize: 15 }}
                />
              </Button>
            )}

            {this.state.java === true && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ java: false })}>
                Java
                <Emoji name="white_check_mark" style={{ fontSize: 15 }} />
              </Button>
            )}
            {this.state.java === false && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ java: true })}>
                Java
                <Emoji
                  name="negative_squared_cross_mark"
                  style={{ fontSize: 15 }}
                />
              </Button>
            )}

            {this.state.javascript === true && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ javascript: false })}>
                Javascript
                <Emoji name="white_check_mark" style={{ fontSize: 15 }} />
              </Button>
            )}
            {this.state.javascript === false && (
              <Button
                containerStyle={styles.skillContainer}
                style={styles.signupText}
                onPress={() => this.setState({ javascript: true })}>
                Javascript
                <Emoji
                  name="negative_squared_cross_mark"
                  style={{ fontSize: 15 }}
                />
              </Button>
            )}
          </View>

          <Button
            containerStyle={styles.signupContainer}
            style={styles.fishText}
            onPress={this.submit}>
            Submit
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  normal: {
    fontSize: AppStyles.fontSize.title / 1.5,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  skillContainer: {
    width: AppStyles.buttonWidth.main / 4,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 10,
    marginRight: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 40,
  },
  signupText: {
    color: 'white',
    fontSize: 10,
  },
  fishText: {
    color: AppStyles.color.tint,
  },
});

export default SignupScreen;
