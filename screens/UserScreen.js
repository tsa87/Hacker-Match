import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import Profile from '../components/ProfileComponent';

export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.navigation.state.params;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: '20px',
            textAlign: 'center',
            textAlignVertical: 'top',
          }}>
          Hello, {this.state.firstName}! This is how other users see your
          profile
        </Text>

        <Profile firstName = {this.state.firstName} lastName = {this.state.lastName} career={this.state.career} location = {this.state.location} gitLink={this.state.gitLink} resumeLink = {this.state.resumeLink} linkedinLink={this.state.linkedinLink}/>
        <Button
          onPress={() => this.props.navigation.navigate('Swipe')}
          title="Let's Swipe"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
