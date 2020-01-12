// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    firstName: '', lastName: '', career: '', location: '', gitLink: '', resumeLink: '', linkedinLink: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { firstName, lastName, career, location, gitLink, resumeLink, linkedinLink } = this.state
    if (firstName != '' && lastName != '' && career != '' && location != '') {
      alert(firstName + lastName + career + location +  gitLink + resumeLink + linkedinLink)
    } else {
      alert('error signing up')
    }
  }
 
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='First Name'
            autoCapitalize="none"
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('firstName', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Last Name'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('lastName', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Career'
            autoCapitalize="none"
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('career', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Location'
            autoCapitalize="none"
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('location', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='GitHub Link (Optional)'
            autoCapitalize="none"
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('gitLink', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Resume Link (Optional)'
            autoCapitalize="none"
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('resumeLink', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Linkedin Link (Optional)'
            autoCapitalize="none"
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('linkinLink', val)}
          />
        </View>
        <View style={styles.signupButton}>
          <Button title='Sign Up' onPress={this.signUp} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    backgroundColor: '#cce0e3',
    margin: 10,
    padding: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: '200',
  },
  container: {
    marginTop: 60,
    marginBottom: 60,
    flex: 1,
    alignItems: 'center'
  },
  signupButton: {
    flex: 1,
    alignItems: 'center'
  }
})