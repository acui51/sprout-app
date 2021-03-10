import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Assets + Data
import { Colors, Images } from "../../assets/Themes";

// Components
import { CustomText } from "../CustomText";

const SoundCloudBar = ({ height, backgroundColor }) => {
  return (
    <View style={[styles.soundCloudBar, { height, backgroundColor }]}></View>
  );
};

/**
 *
 * @param {*} prevSounds - toggles whether we see 'last x soundbites'
 * @param {*} prevPeople - number of prev people soundbubbles we see
 */
export function SoundCloudPlayer({
  prevSounds,
  prevPeople,
  variant,
  customStyles,
}) {
  const [time, setTime] = useState(0);

  let scBars = [];
  for (let i = 0; i < 60; i++) {
    if (i < time) {
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
          backgroundColor={variant === "dark" ? Colors.white : Colors.gray}
        />
      );
    }
  }

  let prevSoundbiteBubbles = [];
  let bubbles = ["honest_ocean", "dj_cobra"]; // probs needs to be a prop later
  for (let j = 0; j < prevPeople; j++) {
    // If only one person, push on the last person in the chain because it's there sound
    if (prevPeople === 1) {
      prevSoundbiteBubbles.push(
        <Image
          key={j}
          style={styles[`userSB${j}`]}
          source={Images[bubbles[bubbles.length - 1]]}
        />
      );
    } else {
      prevSoundbiteBubbles.push(
        <Image
          key={j}
          style={styles[`userSB${j}`]}
          source={Images[bubbles[j]]}
        />
      );
    }
  }

  return (
    <View
      style={[
        variant === "dark" ? styles.wrapperDark : styles.wrapperLight,
        customStyles,
      ]}
    >
      {prevSounds && (
        <>
          <CustomText
            customStyles={{
              color: Colors.gray,
              fontWeight: "700",
              marginBottom: 8,
            }}
          >
            Include last 1 sounds
          </CustomText>
          <View style={styles.prevSounds}>
            <View style={styles.prevSoundPrimary}></View>
            <View style={styles.soundConnector}></View>
            <View style={styles.prevSoundUnselected}></View>
          </View>
        </>
      )}
      <View style={styles.soundCloudPlayer}>
        <FontAwesome
          name="play-circle"
          size={35}
          color={Colors.primary}
          onPress={() => setTime(60)}
        />
        <View style={styles.scBarWrapper}>
          {scBars}
          <CustomText
            customStyles={[
              styles.startText,
              variant === "light" && { color: Colors.gray },
            ]}
          >
            0:11
          </CustomText>
          <CustomText
            customStyles={[
              styles.endText,
              variant === "light" && { color: Colors.gray },
            ]}
          >
            0:30
          </CustomText>

          {prevSoundbiteBubbles}
        </View>
      </View>
    </View>
  );
}

export const wrapper = {
  borderRadius: 24,
  paddingTop: 16,
};

const styles = StyleSheet.create({
  wrapperDark: {
    ...wrapper,
    backgroundColor: Colors.background2,
  },
  wrapperLight: {
    ...wrapper,
    backgroundColor: Colors.lightGrayEighty,
  },
  soundCloudPlayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
  prevSounds: {
    flexDirection: "row",
    alignItems: "center",
  },
  prevSoundPrimary: {
    width: 12,
    height: 12,
    backgroundColor: Colors.primary,
    borderRadius: 6,
  },
  prevSoundUnselected: {
    width: 12,
    height: 12,
    backgroundColor: Colors.gray,
    borderRadius: 6,
  },
  soundConnector: {
    width: 35,
    height: 2,
    backgroundColor: Colors.gray,
  },
  userSB0: {
    transform: [{ rotateX: "180deg" }],
    position: "absolute",
    height: 30,
    width: 30,
    top: 45,
  },
  userSB1: {
    transform: [{ rotateX: "180deg" }],
    position: "absolute",
    height: 30,
    width: 30,
    top: 45,
    left: "33%",
  },
});
