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


let resumeLink = 'https://docs.google.com/document/d/1tABZDy9tzxdAI_lCFQwp5UYjgCj4AB21t5hxXqvNjVE/edit?usp=sharing'
let githubLink = 'https://github.com/joeyshi12'
let textTheme = "#000000"
let backgroundTheme = "#654321"
let photoURL = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1571606036'
let userName = "Name";
let career = "Career";
let description = "Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,";

const profilePage = () => {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: photoURL}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{userName}</Text>
              <Text style={styles.info}>{career}</Text>
              <Text style={styles.description}>{description}</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                Linking.openURL(githubLink);
              }}>
                <Text>Github</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                Linking.openURL(resumeLink)
              }}>
                <Text>Resume</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: backgroundTheme,
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: textTheme,
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: textTheme
  ,
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    color: textTheme,
    backgroundColor: backgroundTheme,
  },
});