import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// assets + data
import { Colors, Images } from "../../assets/Themes";

// components
import { CustomText, SoundCloudPlayer, Bubble } from "../../components";
import Container from "../../hoc/Container";

export default () => {
  return (
    <Container>
      <ScrollView></ScrollView>
      <View style={styles.bottomPlayer}>
        <Bubble genre="edm" img={Images.sb_monsters} small />
        <SoundCloudPlayer
          customStyles={styles.soundcloudplayer}
          variant="dark"
          soundEvolution
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  bottomPlayer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 0,
    backgroundColor: Colors.background1,
    width: "100%",
  },
  soundcloudplayer: {
    backgroundColor: Colors.background1,
    paddingHorizontal: 0,
    width: "75%",
    paddingTop: 0,
  },
});
