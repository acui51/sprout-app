import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Metrics } from "../../assets/Themes";

// Components
import { CustomButton, Bubble, CustomText } from "../../components";

export default function studio({ navigation }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <CustomButton
          text="NEXT"
          variantButton="primaryOutline"
          variantText="whiteText"
          width={110}
          onPress={() => navigation.navigate('soundsGood')}
        />
      </View>
      <View style={styles.button}>
      <CustomButton
          text="GoBack"
          variantButton="primaryOutline"
          variantText="whiteText"
          width={110}
          onPress={() => navigation.navigate('Upload')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.marginHorizontal,
  },
  logo: {
    height: Metrics.icons.xl,
    resizeMode: "contain",
  },
});