import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// assets + data
import { Colors, Images } from "../../assets/Themes";

// components
import {
  SoundCloudPlayer,
  Bubble,
  CustomText,
  CustomButton,
} from "../../components";
import Container from "../../hoc/Container";

export default () => {
  const [soundbitePlaying, setSoundbitePlaying] = useState({
    name: "sb_monsters",
    genre: "edm",
  });

  return (
    <Container>
      <ScrollView>
        <Bubble
          genre="rnb"
          img={Images.sb_rnbStatue}
          onPress={() =>
            setSoundbitePlaying({ name: "sb_rnbStatue", genre: "rnb" })
          }
          med
          user
        />
        <Bubble
          genre="edm"
          img={Images.sb_monsters}
          notif
          onPress={() =>
            setSoundbitePlaying({ name: "sb_monsters", genre: "edm" })
          }
        />
      </ScrollView>
      <CustomButton
        variantButton="primaryShadow"
        text="GO TO ORIGIN"
        variantText="whiteBaseText"
        customStyles={styles.goToOrigin}
      />
      <View style={styles.bottomPlayer}>
        <Bubble
          genre={soundbitePlaying.genre}
          img={Images[soundbitePlaying.name]}
          small
        />
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
    justifyContent: "space-around",
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
  goToOrigin: {
    position: "absolute",
    bottom: 125,
    alignSelf: "center",
  },
});
