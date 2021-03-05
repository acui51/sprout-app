import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

// Assets
import { Colors } from "../../assets/Themes";

/**
 * @param {string} variant - style variant
 * @param {string} text - inner text of button
 * @param {number} width - specified width
 * @param {function} onPress - callback for button
 */
//   <CustomButton
//     text="Connect"
//     variantButton="primaryShadow"
//     variantText="whiteText"
//     width={120}
//   />
export function CustomButton({
  variantButton,
  variantText,
  text,
  onPress,
  width,
  customStyles,
}) {
  return (
    <TouchableOpacity
      style={[styles[variantButton], { width }, customStyles]}
      onPress={onPress}
    >
      <Text style={styles[variantText]}>{text}</Text>
    </TouchableOpacity>
  );
}

// Base styling for button
export const base = {
  paddingHorizontal: 15,
  paddingVertical: 14,
  borderRadius: 24,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

// Base styling for text
export const text = {
  fontSize: 12,
  letterSpacing: 1.5,
  fontWeight: "bold",
};

// Primary styling for button
export const primary = {
  backgroundColor: Colors.primary,
};

const styles = StyleSheet.create({
  primaryShadow: {
    ...base,
    ...primary,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  primaryOutline: {
    ...base,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  whiteText: {
    ...text,
    color: Colors.white,
  },
  blackText: {
    ...text,
    color: Colors.background1,
  },
  
  /********** EDM **********/
  edm: {
    ...base,
    backgroundColor: Colors.colorful2,
  },
  edmShadow: {
    ...base,
    backgroundColor: Colors.colorful2,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.5,
    shadowRadius: 50,
    shadowOffset: { width: 0, height: 8 },
  },
  edmOutline: {
    ...base,
    borderColor: Colors.colorful2,
    borderWidth: 2,
  },
  edmText: {
    ...text,
    color: Colors.colorful2,
  },

  /********** POP **********/
  pop: {
    // TODO: WIDTH MIGHT HAVE TO BE CHANGED - HOW DO I FORWARD PROPS
    ...base,
    backgroundColor: Colors.colorful4,
  },
  popOutline: {
    ...base,
    borderColor: Colors.colorful4,
    borderWidth: 2,
  },
  popText: {
    ...text,
    color: Colors.colorful4,
  },

  /********** COUNTRY **********/
  country: {
    // TODO: WIDTH MIGHT HAVE TO BE CHANGED - HOW DO I FORWARD PROPS
    ...base,
    backgroundColor: Colors.colorful6,
  },
  countryOutline: {
    ...base,
    borderColor: Colors.colorful6,
    borderWidth: 2,
  },
  countryText: {
    ...text,
    color: Colors.colorful6,
  },

  /********** HIP HOP **********/
  hiphop: {
    // TODO: WIDTH MIGHT HAVE TO BE CHANGED - HOW DO I FORWARD PROPS
    ...base,
    backgroundColor: Colors.gray,
  },
  hiphopOutline: {
    ...base,
    borderColor: Colors.gray,
    borderWidth: 2,
  },
  hiphopText: {
    ...text,
    color: Colors.gray,
  },

  /********** RNB **********/
  rnb: {
    // TODO: WIDTH MIGHT HAVE TO BE CHANGED - HOW DO I FORWARD PROPS
    ...base,
    backgroundColor: Colors.colorful1,
  },
  rnbOutline: {
    ...base,
    borderColor: Colors.colorful1,
    borderWidth: 2,
  },
  rnbText: {
    ...text,
    color: Colors.colorful1,
  },

  /********** ROCK **********/
  rock: {
    // TODO: WIDTH MIGHT HAVE TO BE CHANGED - HOW DO I FORWARD PROPS
    ...base,
    backgroundColor: Colors.colorful5,
  },
  rockOutline: {
    ...base,
    borderColor: Colors.colorful5,
    borderWidth: 2,
  },
  rockText: {
    ...text,
    color: Colors.colorful5,
  },
});
