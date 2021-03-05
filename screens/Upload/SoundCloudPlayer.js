import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Assets + Data
import { Colors } from "../../assets/Themes";

// Components
import { CustomText } from "../../components";

const SoundCloudBar = ({ height, backgroundColor }) => {
  return (
    <View style={[styles.soundCloudBar, { height, backgroundColor }]}></View>
  );
};

const SoundCloudPlayer = () => {
  let scBars = [];
  for (let i = 0; i < 60; i++) {
    if (i < 22) {
      scBars.push(
        <SoundCloudBar
          key={i}
          height={Math.floor(Math.random() * 40) + 1}
          backgroundColor={Colors.primary}
        />
      );
    } else {
      scBars.push(
        <SoundCloudBar
          key={i}
          height={Math.floor(Math.random() * 40) + 1}
          backgroundColor={Colors.white}
        />
      );
    }
  }
  return (
    <View style={styles.soundCloudPlayer}>
      <FontAwesome name="play-circle" size={35} color={Colors.primary} />
      <View style={styles.scBarWrapper}>
        {scBars}
        <CustomText customStyles={styles.startText}>0:11</CustomText>
        <CustomText customStyles={styles.endText}>0:30</CustomText>
      </View>
    </View>
  );
};

export default SoundCloudPlayer;

const styles = StyleSheet.create({
  soundCloudPlayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: Colors.background2,
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  soundCloudBar: {
    width: 2.4,
    backgroundColor: Colors.white,
    borderRadius: 20,
    margin: 1,
    borderColor: "blue",
    // borderWidth: 1,
  },
  scBarWrapper: {
    flexDirection: "row",
    transform: [{ rotateX: "180deg" }],
    marginLeft: 10,
    position: "relative",
  },
  startText: {
    fontWeight: "700",
    position: "absolute",
    transform: [{ rotateX: "180deg" }],
    top: -15,
  },
  endText: {
    fontWeight: "700",
    position: "absolute",
    transform: [{ rotateX: "180deg" }],

    top: -15,
    right: 0,
  },
});
