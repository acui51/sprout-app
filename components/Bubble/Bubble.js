import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// Assets
import { Colors, Images } from "../../assets/Themes";

/**
 * Bubble component
 *
 * @param {string} genre
 * @param {Images.<>} img
 */
export function Bubble({
  genre,
  img,
  onPress,
  customStyles,
  large,
  small,
  med,
  user,
  notif,
}) {
  return (
    <TouchableOpacity
      style={[
        styles(genre).bubbleBackground,
        customStyles,
        large && styles(genre).bigBubbleBackground,
        med && styles(genre).medBubbleBackground,
      ]}
      onPress={onPress}
      onLongPress={() => console.log("LONG PRESS")}
    >
      <Image
        style={[
          styles(genre).img,
          large && styles(genre).bigImg,
          small && styles(genre).smallImg,
          med && styles(genre).medImg,
        ]}
        source={img}
      />
      {user && (
        <Image
          source={Images.ariana_venti}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            top: 0,
            right: 0,
          }}
        />
      )}
      {notif && (
        <View
          style={{
            position: "absolute",
            backgroundColor: Colors.colorful7,
            height: 18,
            width: 18,
            borderRadius: 9,
            top: 7,
            right: 7,
            borderColor: Colors.background1,
            borderWidth: 3,
          }}
        />
      )}
    </TouchableOpacity>
  );
}

const genreToColor = {
  edm: Colors.colorful2,
  pop: Colors.colorful4,
  country: Colors.colorful6,
  rnb: Colors.colorful1,
  rock: Colors.colorful5,
  hiphop: Colors.colorful7,
};

const base = {
  padding: 4.5,
  alignSelf: "center",
  borderRadius: 99 / 2,
};

const bigBase = {
  padding: 4.5,
  alignSelf: "center",
  borderRadius: 191 / 2,
};

const medBase = {
  padding: 4.5,
  alignSelf: "center",
  borderRadius: 129 / 2,
};

// Stylesheet factory
export const styles = (genre) =>
  StyleSheet.create({
    bubbleBackground: {
      ...base,
      backgroundColor: genreToColor[genre],
    },
    bigBubbleBackground: {
      ...bigBase,
      backgroundColor: genreToColor[genre],
    },
    medBubbleBackground: {
      ...medBase,
      backgroundColor: genreToColor[genre],
    },
    img: {
      height: 90,
      width: 90,
    },
    bigImg: {
      height: 182,
      width: 182,
    },
    medImg: {
      height: 120,
      width: 120,
    },
    smallImg: {
      height: 60,
      width: 60,
    },
  });
