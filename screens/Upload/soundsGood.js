import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, View } from "react-native";

// Assets
import { Metrics, Images, Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import Container from "../../hoc/Container";
import SoundCloudPlayer from "./SoundCloudPlayer";

export default function SoundsGood({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <CustomText
            customStyles={{
              fontSize: 16,
              fontWeight: "700",
              marginBottom: 8,
              paddingHorizontal: 20,
            }}
          >
            2/3: Preview Sound
          </CustomText>
          <View style={styles.backgroundBar}>
            <View style={styles.progressBar}></View>
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <Container customStyles={styles.container}>
      <View>
        <CustomText titleBold customStyles={styles.title}>
          Sounds Good?
        </CustomText>
      </View>
      <View style={styles.content}>
        <SoundCloudPlayer prevPeople={1} />
      </View>
      <View style={styles.button}>
        <CustomButton
          text="YES! CONTINUE"
          variantButton="primaryShadow"
          variantText="whiteBaseText"
          width={210}
          onPress={() => navigation.navigate("Upload a Cover Photo")}
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
  backgroundBar: {
    flexBasis: "75%",
    backgroundColor: "#C4C4C4",
    maxHeight: 8,
    borderRadius: 24,
    position: "relative",
  },
  progressBar: {
    backgroundColor: Colors.primary,
    height: 8,
    borderRadius: 24,
    width: "66%",
    position: "absolute",
  },
});
