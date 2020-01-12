import React from 'react';
import LoginScreen from 'react-native-login-screen';
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  // center: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,
  },
  margin: {
    marginTop: 100,
  },
});

export default class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
    header: null,
  };

  render() {
    return (
      <View style={styles.buttonView}>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Log In"
        />
        <Button
          style={styles.margin}
          type="outline"
          onPress={() => this.props.navigation.navigate('Form')}
          title="New? Sign up now"
        />
      </View>
    );
  }
}
