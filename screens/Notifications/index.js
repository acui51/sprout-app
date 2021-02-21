import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Metrics, Colors } from "../../assets/Themes";

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

export default () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text1 }}>Notifications</Text>
      <View background={Colors.gradient1}></View>
    </SafeAreaView>
  );
};
