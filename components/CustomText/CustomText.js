import React from "react";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Colors } from "../../assets/Themes/";

/**
 *
 * @param {*} children
 * @param {style} customStyle
 */
export function CustomText({ children, customStyles }) {
  return <Text style={[styles.text, customStyles]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});
