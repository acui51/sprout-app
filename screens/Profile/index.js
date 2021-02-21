import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Metrics } from "../../assets/Themes";

// Components

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
  },
  logo: {
    height: Metrics.icons.xl,
    resizeMode: "contain",
  },
});

export default () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text1 }}>Profile</Text>
    </SafeAreaView>
  );
};
