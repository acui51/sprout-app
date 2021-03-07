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
  children,
}) {
  return (
    <TouchableOpacity
      style={[styles[variantButton], { width }, customStyles]}
      onPress={onPress}
    >
      {children ? children : <Text style={styles[variantText]}>{text}</Text>}
    </TouchableOpacity>
  );
}

// Base styling for button
export const base = {
  paddingHorizontal: 32,
  paddingVertical: 19,
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

export const profile = {
  paddingHorizontal: 12.5,
  paddingVertical: 6,
  borderRadius: 24,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

// Base styling for text
export const baseText = {
  fontSize: 16,
  letterSpacing: 1.5,
  fontWeight: "bold",
};

export const profileText = {
  fontSize: 16,
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
  profileShadow: {
    ...profile,
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
  profileOutline: {
    ...profile,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  whiteBaseText: {
    ...baseText,
    color: Colors.white,
  },
  blackBaseText: {
    ...baseText,
    color: Colors.background1,
  },
  whiteProfileText: {
    ...profileText,
    color: Colors.white,
  },
  blackProfileText: {
    ...profileText,
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
    ...baseText,
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
    ...baseText,
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
    ...baseText,
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
    ...baseText,
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
    ...baseText,
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
    ...baseText,
    color: Colors.colorful5,
  },
});
