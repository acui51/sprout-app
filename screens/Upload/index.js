import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";

// Assets
import { Metrics } from "../../assets/Themes";
import { Colors, Images } from "../../assets/Themes";

// Components
import { CustomButton, Bubble, CustomText, primary } from "../../components";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  const navigation = useNavigation()
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style = {styles.button}>
        <Image source={Images.record} />
        <CustomText style = {styles.whiteText}>Record</CustomText>
      </TouchableOpacity> */}

      <View style={styles.button}>
        <CustomButton
          text="Record"
          variantButton="primaryShadow"
          variantText="whiteText"
          width={165}
          onPress={() => navigation.navigate('Studio')}
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
    // backgroundColor: Colors.primary,
  },
  whiteText: {
    color: Colors.white,
  },
});