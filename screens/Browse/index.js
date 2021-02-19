import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

import { Images, Metrics, Colors } from "../../assets/Themes";

import { Bubble } from "../../components";

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
      <Text style={{ color: colors.text }}>Browse</Text>
      <View background={Colors.gradient1}></View>
      {/* <Image source={Images.logo} style={styles.logo} /> */}
    </SafeAreaView>
  );
};
