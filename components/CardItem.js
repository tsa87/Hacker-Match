import React from 'react';
import styles from '../assets/styles';

import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
} from "react-native";
import Constants from "expo-constants";
import Emoji from "react-native-emoji";
import Icon from "react-native-vector-icons";
import { SocialIcon } from 'react-native-elements'

const AppStyles = {
  color: {
    main: "#5ea23a",
    text: "#696969",
    title: "#464646",
    subtitle: "#545454",
    categoryTitle: "#161616",
    tint: "#5d5aff",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#2bdf85",
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    grey: "grey",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#f2f2f2",
    blue: "#3293fe"
  },
  fontSize: {
    title: 35,
    content: 20,
    normal: 16
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%"
  },
  fontName: {
    main: "Noto Sans",
    bold: "Noto Sans"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};


const CardItem = ({
  actions,
  description,
  image,
  matches,
  name,
  skills,
  onPressLeft,
  onPressRight,
  status,
  variant
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth / 2 -30,
      height: fullWidth / 2 - 30,
      margin: 10
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30
    }
  ];

  return (
    <View style={localStyles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Emoji name="coffee" style={{fontSize: 25}} /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/*SKILLS*/}
      <View style={localStyles.container}>
        <View style={localStyles.fixToText}>
          { skills.map((item) => (
            <Text style={localStyles.signupText}>
              {item}
              <Emoji name="white_check_mark" style={{ fontSize: 15 }} />
            </Text>
          ))}
        </View>
      </View>
      <View style={localStyles.container}>
        <Text />
      </View>
      <View style={localStyles.linkButtons}>
        <TouchableOpacity onPress={() => Linking.openURL("http://github.com")}>
          <SocialIcon button light type="github" style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("http://linkedin.com")}
        >
          <SocialIcon button light type="linkedin" style={styles.button} />
        </TouchableOpacity>
      </View>

      <View></View>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Text style={styles.like}>
              <Emoji name="heart" style={{fontSize: 30}} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressRight()}
          >
            <Text style={styles.dislike}>
              <Emoji name="negative_squared_cross_mark" style={{fontSize: 30}} />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: AppStyles.buttonWidth.main/4,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 5,
    marginRight: 20,
  },
  linkButtons: {
    flexDirection: "row"
  },
  signupText: {
    color: "white"
    // paddingBottom: 10,
    // marginBottom:10,
  },
  container: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 16,
  },
  containerCardItem: {
		backgroundColor: "white",
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "black",
		shadowOffset: { height: 0, width: 0 },
    width: 330,
    height: 550
	},
})

export default CardItem;
