import React from "react";
import { StyleSheet, View } from "react-native";

// Assets
import { Metrics, Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import RecordPlayer from "./RecordPlayer";
import Container from "../../hoc/Container";

export default function Studio({ navigation }) {
  return (
    <Container customStyles={styles.container}>
      <View>
        <CustomText customStyles={styles.title}>
          Ariana Venti’s studio
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
            variantText="whiteText"
            width={110}
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
});
