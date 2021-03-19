import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// Assets
import { Colors } from "../../assets/Themes";

// Components
import Recorder from "./Recorder";
import { CustomText } from "../../components";

const Player = ({ startTime }) => {
  return (
    // Outer white background bar
    <View style={styles.backgroundBar}>
      {/* Inner purple progress bar */}
      {startTime === "0:30" && <View style={styles.progressBar}></View>}
      <CustomText customStyles={styles.startText}>{startTime}</CustomText>
      <CustomText customStyles={styles.endText}>0:30</CustomText>
    </View>
  );
};

const RecordPlayer = ({ customStyles }) => {
  const [startTime, setStartTime] = useState("0:00");
  const [record, setRecord] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <FontAwesome name="play-circle" size={35} color={Colors.primary} />
        <Player startTime={startTime} />
      </View>
      <View style={styles.recordDelete}>
        {record ? (
          <TouchableOpacity
            onPress={() => {
              setRecord(false);
              setStartTime("0:30");
            }}
          >
            <Recorder />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setRecord(true);
            }}
          >
            <View style={styles.recorderBorder}>
              <View style={styles.stop}></View>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.delete}
          onPress={() => setStartTime("0:00")}
        >
          <Feather name="delete" size={40} color={Colors.white} />
        </TouchableOpacity>
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
    width: "100%",
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
  stop: {
    width: 24,
    height: 24,
    backgroundColor: Colors.red,
    borderRadius: 4,
  },
  recorderBorder: {
    borderColor: Colors.white,
    borderWidth: 2,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
