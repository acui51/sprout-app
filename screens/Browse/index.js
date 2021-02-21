import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets + Data
import { Metrics } from "../../assets/Themes";
import { SOUNDBITES_DATA } from "../../modelData";

// Components
import { CustomButton } from "../../components";

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
  const [soundbites, setSoundbites] = useState([]);
  const { colors } = useTheme();

  // Get modelData
  useEffect(() => {
    setSoundbites(SOUNDBITES_DATA);
  }, []);

  // Testing modelData purposes
  const addSoundbite = () => {
    setSoundbites([...soundbites, "Soundbite4"]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text1 }}>Browse</Text>
      {soundbites.map((elem, i) => {
        return (
          <Text key={i} style={{ color: colors.text2 }}>
            {elem}
          </Text>
        );
      })}

      {/* TEST BUTTONS - CAN DELETE */}
      <CustomButton text="EDM" variantButton="edm" variantText="blackText" />
      <CustomButton
        text="EDM"
        variantButton="edmOutline"
        variantText="edmText"
      />
      <CustomButton text="POP" variantButton="pop" variantText="blackText" />
      <CustomButton
        text="POP"
        variantButton="popOutline"
        variantText="popText"
      />
      <CustomButton
        text="COUNTRY"
        variantButton="country"
        variantText="blackText"
      />
      <CustomButton
        text="COUNTRY"
        variantButton="countryOutline"
        variantText="countryText"
      />
      <CustomButton
        text="HIP HOP"
        variantButton="hiphop"
        variantText="blackText"
      />
      <CustomButton
        text="HIP HOP"
        variantButton="hiphopOutline"
        variantText="hiphopText"
      />
      <CustomButton text="RNB" variantButton="rnb" variantText="blackText" />
      <CustomButton
        text="RNB"
        variantButton="rnbOutline"
        variantText="rnbText"
      />
      <CustomButton
        text="RNB"
        variantButton="hiphopOutline"
        variantText="hiphopText"
      />
      <CustomButton text="ROCK" variantButton="rock" variantText="blackText" />
      <CustomButton
        text="ROCK"
        variantButton="rockOutline"
        variantText="rockText"
      />
    </SafeAreaView>
  );
};
