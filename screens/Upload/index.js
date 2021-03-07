import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Assets
import { Metrics } from "../../assets/Themes";
import { Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import Container from "../../hoc/Container";
import Recorder from "./Recorder";

export default function App() {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <CustomText customStyles={{ fontSize: 16, fontWeight: "700" }}>
          0/3: Pick Create Method
        </CustomText>
      ),
    });
  }, [navigation]);

  const navigation = useNavigation();
  return (
    <Container>
      {/* <TouchableOpacity style = {styles.button}>
        <Image source={Images.record} />
        <CustomText style = {styles.whiteText}>Record</CustomText>
      </TouchableOpacity> */}
      <View style={styles.container}>
        <View style={styles.button}>
          <CustomButton
            variantButton="primaryShadow"
            variantText="whiteBaseText"
            width={180}
            onPress={() => navigation.navigate("Studio")}
            customStyles={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              justifyContent: "center",
            }}
          >
            <Recorder small customStyles={{ marginRight: 8 }} />
            <CustomText customStyles={styles.baseText}>Record</CustomText>
          </CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Upload File"
            variantButton="primaryOutline"
            variantText="whiteBaseText"
            width={180}
            customStyles={{
              paddingVertical: 14,
              paddingHorizontal: 16,
              justifyContent: "center",
            }}
          ></CustomButton>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Metrics.marginHorizontal,
  },
  logo: {
    height: Metrics.icons.xl,
    resizeMode: "contain",
  },
  button: {
    padding: 10,
  },
  whiteText: {
    color: Colors.white,
  },
  baseText: {
    fontSize: 16,
    letterSpacing: 1.5,
    fontWeight: "bold",
    color: Colors.white,
  },
});
