import React from "react";
import { StyleSheet, Image, View } from "react-native";

// Assets
import { Metrics, Images, Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import RecordPlayer from "./RecordPlayer";
import Container from "../../hoc/Container";

export default function studio({ navigation }) {
  return (
    <Container style={styles.container}>
      <CustomText customStyles={styles.title}>Ariana Venti’s studio</CustomText>
      <View style={styles.content}>
        {/* <Image source={Images.studio} /> */}
        <RecordPlayer />
      </View>
      <View style={styles.content}>
        <View style={styles.button}>
          <CustomButton
            text="NEXT"
            variantButton="primaryShadow"
            variantText="whiteText"
            width={110}
            onPress={() => navigation.navigate("SoundsGood")}
          />
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Go Back"
            variantButton="primaryShadow"
            variantText="whiteText"
            width={110}
            onPress={() => navigation.navigate("Upload")}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
  },
  title: {
    fontSize: 45,
    color: Colors.white,
    paddingBottom: 100,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
  },
});
