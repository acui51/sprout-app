import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

// Assets
import { Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import RecordPlayer from "./RecordPlayer";
import Container from "../../hoc/Container";

export default function Studio({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ justifyContent: "center" }}>
          <CustomText
            customStyles={{
              fontSize: 16,
              fontWeight: "700",
              marginBottom: 8,
              paddingHorizontal: 24,
            }}
          >
            1/3: Record Sound
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
          My Studio
        </CustomText>
      </View>
      <View style={styles.content}>
        <RecordPlayer />
      </View>
      <View style={styles.content}>
        <View>
          <CustomButton
            text="NEXT"
            variantButton="primaryShadow"
            variantText="whiteBaseText"
            width={120}
            onPress={() => navigation.navigate("SoundsGood")}
            customStyles={styles.button}
          />
        </View>
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
    // paddingBottom: 100,
    fontWeight: "700",
  },
  content: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
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
    width: "33%",
    position: "absolute",
  },
});
