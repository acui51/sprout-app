import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

import { Images, Metrics } from "../../assets/Themes";

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
  return (
    <SafeAreaView style={styles.container}>
      <Text>Browse</Text>
      {/* <Image source={Images.logo} style={styles.logo} /> */}
    </SafeAreaView>
  );
};
