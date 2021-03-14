import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

// Assets
import { Colors } from "../../assets/Themes";

/**
 * Bubble component
 *
 * @param {string} genre
 * @param {Images.<>} img
 */
export function Bubble({ genre, img, onPress, customStyles, large, small }) {
  return (
    <TouchableOpacity
      style={[
        styles(genre).bubbleBackground,
        customStyles,
        large && styles(genre).bigBubbleBackground,
      ]}
      onPress={onPress}
    >
      <Image
        style={[
          styles(genre).img,
          large && styles(genre).bigImg,
          small && styles(genre).smallImg,
        ]}
        source={img}
      />
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
    img: {
      height: 90,
      width: 90,
    },
    bigImg: {
      height: 182,
      width: 182,
    },
    smallImg: {
      height: 60,
      width: 60,
    },
  });
