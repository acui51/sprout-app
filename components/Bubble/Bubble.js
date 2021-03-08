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
export function Bubble({ genre, img, onPress, customStyles }) {
  return (
    <TouchableOpacity
      style={[styles(genre).bubbleBackground, customStyles]}
      onPress={onPress}
    >
      <Image style={styles(genre).img} source={img} />
    </TouchableOpacity>
  );
}

const genreToColor = {
  edm: Colors.colorful2,
  pop: Colors.colorful4,
  country: Colors.colorful6,
  indie: Colors.colorful5,
  rnb: Colors.colorful1,
  rock: Colors.colorful3,
};

const base = {
  padding: 4.5,
  alignSelf: "center",
  borderRadius: 99 / 2,
};

// Stylesheet factory
export const styles = (genre) =>
  StyleSheet.create({
    bubbleBackground: {
      ...base,
      backgroundColor: genreToColor[genre],
    },
    img: {
      height: 90,
      width: 90,
    },
  });
