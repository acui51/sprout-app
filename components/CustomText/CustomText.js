import React from "react";
import { Text, StyleSheet } from "react-native";

// Assets
import { Colors } from "../../assets/Themes/";

/**
 *
 * @param {*} children
 * @param {style} customStyle
 */
export function CustomText({ children, title, titleBold, customStyles }) {
  return (
    <Text
      style={[
        styles.text,
        customStyles,
        title && styles.title,
        titleBold && styles.titleBold,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
  title: {
    fontFamily: "Kollektif",
  },
  titleBold: {
    fontFamily: "Kollektif-Bold",
  },
});
