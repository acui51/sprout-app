import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";

import { Images, Metrics } from "../../assets/Themes";

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
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upload</Text>
      <Image source={Images.logo} style={styles.logo} />
    </SafeAreaView>
  );
};
