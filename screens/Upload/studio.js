import React, { useLayoutEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Assets
import { Colors, Metrics } from "../../assets/Themes";

// Components
import { CustomButton, CustomText, SoundCloudPlayer } from "../../components";
// import SoundCloudPlayer from "./SoundCloudPlayer";
import RecordPlayer from "./RecordPlayer";
import Container from "../../hoc/Container";

export default function Studio({ route, navigation }) {
  // Route.params.reply tells me if we need to render the lastSoundbites thinge

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
          My Studio
        </CustomText>
      </View>
      <View style={styles.content}>
        {route.params && route.params.reply && (
          <SoundCloudPlayer
            prevPeople={2}
            prevSounds={true}
            variant="dark"
            customStyles={{
              marginBottom: 32,
              width: "100%",
              paddingHorizontal: 24,
            }}
          />
        )}
        <RecordPlayer />
      </View>
      <View style={styles.content}>
        <View>
          <CustomButton
            text="NEXT"
            variantButton="primaryShadow"
            variantText="whiteBaseText"
            width={120}
            onPress={() => navigation.navigate("Sounds Good", { reply: true })}
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
