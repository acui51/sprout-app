import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Metrics } from "../../../assets/Themes";

// Components

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
  },
  logo: {
    height: Metrics.icons.medium,
    resizeMode: "contain",
  },
});

export default function InboxPage({ navigation }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text1 }}>Saved</Text>
    </SafeAreaView>
  );
};
