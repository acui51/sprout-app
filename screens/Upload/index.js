import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";
import { useTheme } from "@react-navigation/native";


// Assets
import { Metrics } from "../../assets/Themes";

// Components
import { CustomButton, Bubble, CustomText } from "../../components";

export default function Upload({ navigation }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <CustomButton
          text="Record"
          variantButton="primaryShadow"
          variantText="whiteText"
          width={165}
          onPress={() => navigation.navigate('studio')}
        />
      </View>
      <View style={styles.button}>
        <CustomButton
          text="Upload File"
          variantButton="primaryOutline"
          variantText="whiteText"
          width={165}
        />
      </View>
    </SafeAreaView>
  );
}

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
  button: {
    padding: 10,
  }
});