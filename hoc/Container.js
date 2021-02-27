import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Container({ children, customStyles }) {
  return (
    <SafeAreaView style={[styles.container, customStyles]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
});
