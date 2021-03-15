import React, { useLayoutEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Assets
import { Colors, Metrics } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import Container from "../../hoc/Container";
import Recorder from "./Recorder";

export default function App({ route }) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ justifyContent: "center" }}>
          <CustomText
            customStyles={{
              fontSize: 16,
              fontWeight: "700",
              marginBottom: 8,
            }}
          >
            0/3: Pick Create Method
          </CustomText>
          <View style={styles.backgroundBar}>
            <View style={styles.progressBar}></View>
          </View>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.close}
          onPress={() =>
            navigation.navigate("BrowseTab", { screen: "Explore" })
          }
        >
          <Ionicons name="close" size={16} color={Colors.white} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
            onPress={() =>
              navigation.navigate(
                "Studio",
                route.params && route.params.reply && { reply: true }
              )
            }
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
            onPress={() =>
              navigation.navigate(
                "Studio",
                route.params && route.params.reply && { reply: true }
              )
            }
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
    width: "0%",
    position: "absolute",
  },
  close: {
    backgroundColor: Colors.primary,
    height: 24,
    width: 24,
    borderRadius: 12,
    marginRight: Metrics.headerMarginHorizontal,
    alignItems: "center",
    justifyContent: "center",
  },
});
