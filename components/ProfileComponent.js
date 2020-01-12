import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = ({
  image,
  firstName,
  lastName,
  profilePicture,
  github,
  linkedin,
  location,
  skills,                 
  most_challenging
}) => {
  return(
    <View style={styles.profileContainer}>
      <Image source={image} style={styles.avatar} />
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "white",
    
  },
  avatar: {

  } 
})