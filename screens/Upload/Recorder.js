import * as React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { Colors } from "../../assets/Themes";

const Recorder = ({ customStyles, small }) => {
  return (
    <View
      style={[
        small ? styles.smallRecorderBorder : styles.recorderBorder,
        customStyles,
      ]}
    >
      <View style={small ? styles.smallRecorder : styles.recorder}></View>
    </View>
  );
};

export default Recorder;

const styles = StyleSheet.create({
  recorder: {
    backgroundColor: Colors.red,
    height: 24,
    width: 24,
    borderRadius: 12,
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
  smallRecorderBorder: {
    borderColor: Colors.white,
    borderWidth: 2,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  smallRecorder: {
    backgroundColor: Colors.red,
    height: 18,
    width: 18,
    borderRadius: 9,
  },
});
