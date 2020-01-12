import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Linking } from 'expo';
let backgroundTheme = '#654321';
let textTheme = "#000000";
export default class profilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resumeLink: '',
      githubLink: '',
      textTheme: textTheme,
      backgroundTheme: backgroundTheme,
      photoURL:
        'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1571606036',
      userName: 'Name',
      career: 'Career',
      description:
        'Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,',
    };

    // this.state = this.props.navigation.state.params;
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={{ uri: this.state.photoURL }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.userName}</Text>
            <Text style={styles.info}>{this.state.career}</Text>
            <Text style={styles.description}>{this.state.description}</Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                Linking.openURL(this.state.githubLink);
              }}>
              <Text>Github</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                Linking.openURL(this.state.resumeLink);
              }}>
              <Text>Resume</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: backgroundTheme,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: textTheme,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    color: textTheme,
    backgroundColor: backgroundTheme,
  },
});
