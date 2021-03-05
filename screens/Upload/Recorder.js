import * as React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { Colors } from "../../assets/Themes";

const Recorder = ({ customStyles }) => {
  return (
    <View style={[styles.recorderBorder, customStyles]}>
      <View style={styles.recorder}></View>
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
});
