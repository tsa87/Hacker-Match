import React from 'react';
import { Dimensions, View, ImageBackground, StyleSheet } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import Demo from '../assets/data/demo.js';

export default class SwipeScreen extends React.Component  {
  
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerHome}>
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={swiper => (this.swiper = swiper)}
          >
            
          </CardStack>
        </View>
      </ImageBackground>
    )
  } 
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
		resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  containerHome:{
    backgroundColor: "#FFFFFF",
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "#000000",
		shadowOffset: { height: 0, width: 0 }
  },
})

