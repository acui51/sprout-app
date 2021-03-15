import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from "react-native";

// assets + data
import { Colors, Images } from "../../assets/Themes";

// components
import {
  SoundCloudPlayer,
  Bubble,
  CustomButton,
  CustomText,
} from "../../components";

import Container from "../../hoc/Container";
import { SoundbitePopup } from "../Browse/components";

export default () => {
  const [soundbitePlaying, setSoundbitePlaying] = useState({
    name: "sb_monsters",
    genre: "edm",
  });
  const [soundbiteInFocus, setSoundbiteInFocus] = useState({
    inFocus: false,
    soundbite: {
      imageName: "sb_monsters",
      genre: "edm",
      creator: "honest_ocean",
    },
  });
  const [showInfoModal, setShowInfoModal] = useState(true);
  const soundbiteScroll = useRef(null);

  // const handleDoubleTap = () => {
  //   console.log("hello");
  //   let lastTap = null;
  //   const now = Date.now();
  //   const DOUBLE_PRESS_DELAY = 300;
  //   if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
  //     console.log("double tap registered");
  //   } else {
  //     console.log(lastTap);
  //     lastTap = now;
  //   }
  // };

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showInfoModal}
        onRequestClose={() => setShowInfoModal(false)}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPressOut={() => setShowInfoModal(false)}
        >
          <ScrollView
            directionalLockEnabled={true}
            contentContainerStyle={styles.scrollModal}
          >
            <TouchableWithoutFeedback>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <CustomText
                    customStyles={{
                      fontSize: 18,
                      marginBottom: 28,
                      textAlign: "center",
                    }}
                  >
                    Double tap a sound to start listening to a sound branch!
                  </CustomText>
                  <CustomButton
                    text="OKAY"
                    variantButton="primaryShadow"
                    variantText="whiteBaseText"
                    width={120}
                    customStyles={{ alignSelf: "center" }}
                    onPress={() => setShowInfoModal(false)}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>

      <ScrollView ref={soundbiteScroll}>
        {soundbiteInFocus.inFocus && (
          <SoundbitePopup
            soundbiteInFocus={soundbiteInFocus}
            setSoundbiteInFocus={setSoundbiteInFocus}
            soundbite={soundbiteInFocus.soundbite}
          ></SoundbitePopup>
        )}

        {/* TODO: Doubletap - plays and changes player at the bottom
        Singletap - opens soundbite popup */}

        <Bubble
          genre="rnb"
          img={Images.sb_rnbStatue}
          // onPress={() =>
          //   setSoundbitePlaying({ name: "sb_rnbStatue", genre: "rnb" })
          // }
          onPress={() =>
            setSoundbiteInFocus({
              inFocus: true,
              soundbite: {
                img: "rnbStatue",
                creator: "ariana_venti",
                genre: "rnb",
                title: "Statue",
              },
            })
          }
          med
          user
        />
        <Image
          style={{ height: 100, width: 3, alignSelf: "center" }}
          source={Images.vertical_line}
        />

        <Bubble
          genre="edm"
          img={Images.sb_tameImpala}
          onPress={() =>
            setSoundbitePlaying({ name: "sb_tameImpala", genre: "edm" })
          }
        />
        <Image
          style={{ height: 100, width: 3, alignSelf: "center" }}
          source={Images.vertical_line}
        />
        <Bubble
          genre="pop"
          img={Images.sb_candy}
          onPress={() =>
            setSoundbitePlaying({ name: "sb_candy", genre: "pop" })
          }
        />
        <Image
          style={{ height: 100, width: 3, alignSelf: "center" }}
          source={Images.vertical_line}
        />
        <Bubble
          genre="edm"
          img={Images.sb_monsters}
          notif
          onPress={() =>
            setSoundbitePlaying({ name: "sb_monsters", genre: "edm" })
          }
          customStyles={{ marginBottom: 200 }}
        />
      </ScrollView>
      <CustomButton
        variantButton="primaryShadow"
        text="GO TO ORIGIN"
        variantText="whiteBaseText"
        onPress={() =>
          soundbiteScroll.current.scrollTo({ x: 0, y: 0, animated: true })
        }
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
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.background2,
    borderRadius: 24,
    // padding: 35,
    paddingHorizontal: 25,
    paddingVertical: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  backdrop: {
    flex: 1,
  },
});
