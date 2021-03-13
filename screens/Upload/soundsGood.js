import React, { useLayoutEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Assets
import { Metrics, Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText, SoundCloudPlayer } from "../../components";
import Container from "../../hoc/Container";
// import SoundCloudPlayer from "./SoundCloudPlayer";

export default function SoundsGood({ route, navigation }) {
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
    <Container customStyles={styles.container}>
      <View>
        <CustomText titleBold customStyles={styles.title}>
          Sounds Good?
        </CustomText>
      </View>
      <View style={styles.content}>
        <SoundCloudPlayer
          prevSounds={route.params && route.params.reply && true}
          prevPeople={2}
          variant="dark"
          reply={route.params && route.params.reply}
          customStyles={{
            marginBottom: 32,
            width: "100%",
            paddingHorizontal: 24,
          }}
        />
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
