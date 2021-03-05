import * as React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// Assets
import { Colors } from "../../assets/Themes";

// Components
import Recorder from "./Recorder";
import { CustomText } from "../../components";

const Player = () => {
  return (
    // Outer white background bar
    <View style={styles.backgroundBar}>
      {/* Inner purple progress bar */}
      <View style={styles.progressBar}></View>
      <CustomText customStyles={styles.startText}>0:11</CustomText>
      <CustomText customStyles={styles.endText}>0:30</CustomText>
    </View>
  );
};

const RecordPlayer = ({ customStyles }) => {
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <FontAwesome name="play-circle" size={35} color={Colors.primary} />
        <Player />
      </View>
      <View style={styles.recordDelete}>
        <Recorder />
        <Feather
          style={styles.delete}
          name="delete"
          size={40}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

export default RecordPlayer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.background2,
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  player: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  backgroundBar: {
    flexBasis: "75%",
    backgroundColor: "#C4C4C4",
    height: 10,
    borderRadius: 24,
    position: "relative",
  },
  progressBar: {
    backgroundColor: Colors.primary,
    height: 10,
    borderRadius: 24,
    width: "33%",
    position: "absolute",
  },
  recordDelete: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  delete: {
    position: "absolute",
    left: "33%",
  },
  startText: {
    fontWeight: "700",
    position: "absolute",
    top: 15,
  },
  endText: {
    fontWeight: "700",
    position: "absolute",
    top: 15,
    right: 0,
  },
});
