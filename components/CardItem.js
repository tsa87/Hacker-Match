import React from "react";
import styles from "../assets/styles";
import { SocialIcon } from "react-native-elements";

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
  const fullWidth = Dimensions.get("window").width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth / 2 - 30,
      height: fullWidth / 2 - 30,
      margin: 10
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: "#363636",
      fontSize: variant ? 15 : 30
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Emoji name="coffee" style={{ fontSize: 25 }} /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/*SKILLS*/}
      <View style={localStyles.container}>
        <View style={localStyles.fixToText}>
          {skills.map(item => (
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
      <View>
        <TouchableOpacity onPress={() => Linking.openURL("http://github.com")}>
          <SocialIcon button light type="github" style={styles.button} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL("http://linkedin.com")}
        >
          <SocialIcon button light type="linkedin" style={styles.button} />
        </TouchableOpacity>
      </View>

      {/* DESCRIPTION */}
      {description && (
        <Text style={localStyles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === "Online" ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Text style={styles.like}>
              <Emoji name="heart" style={{ fontSize: 30 }} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressRight()}
          >
            <Text style={styles.dislike}>
              <Emoji
                name="negative_squared_cross_mark"
                style={{ fontSize: 30 }}
              />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: AppStyles.buttonWidth.main / 4,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    height: 30
  },
  signupText: {
    color: "white"
    // paddingBottom: 10,
    // marginBottom:10,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    margin: 10
  },
  descriptionCardItem: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    width: AppStyles.buttonWidth.main / 4,
    fontSize: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: AppStyles.borderRadius.main,
    marginTop: 40,
    marginRight: 25
  }
});

export default CardItem;
