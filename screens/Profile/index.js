import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Metrics } from "../../assets/Themes";

// Components
import { CustomButton } from "../../components";

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
      <CustomButton
        text="Connect"
        variantButton="primaryShadow"
        variantText="whiteText"
        width={120}
      />
      <CustomButton
        text="Requested"
        variantButton="primaryOutline"
        variantText="whiteText"
        width={120}
      />
      <CustomButton
        text="Connected"
        variantButton="primaryOutline"
        variantText="whiteText"
        width={120}
      />
      <CustomButton
        text="Edit Profile"
        variantButton="primaryOutline"
        variantText="whiteText"
        width={120}
      />
    </SafeAreaView>
  );
};
