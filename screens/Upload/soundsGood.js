import React from "react";
import { StyleSheet, Image, View } from "react-native";

// Assets
import { Metrics, Images, Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import Container from "../../hoc/Container";
import SoundCloudPlayer from "./SoundCloudPlayer";

export default function SoundsGood({ navigation }) {
  return (
    <Container customStyles={styles.container}>
      <View>
        <CustomText customStyles={styles.title}>Sounds Good?</CustomText>
      </View>
      <View style={styles.content}>
        <SoundCloudPlayer />
      </View>
      <View style={styles.button}>
        <CustomButton
          text="YES! CONTINUE"
          variantButton="primaryShadow"
          variantText="whiteText"
          width={196}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: 45,
    color: Colors.white,
    fontWeight: "700",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    margin: 10,
  },
});
