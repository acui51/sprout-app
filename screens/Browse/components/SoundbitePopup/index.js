import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// Assets + Data
import { Colors, Images } from "../../../../assets/Themes";

// Components
import {
  CustomButton,
  SoundCloudPlayer,
  Bubble,
  CustomText,
} from "../../../../components";
import { ProfilePreview } from "./ProfilePreview";

const SoundbitePopup = ({
  soundbiteInFocus,
  setSoundbiteInFocus,
  soundbite,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={soundbiteInFocus.inFocus}
      onRequestClose={() => {
        setSoundbiteInFocus(!soundbiteInFocus.inFocus);
      }}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPressOut={() => {
          setSoundbiteInFocus(!soundbiteInFocus.inFocus);
        }}
      >
        <ScrollView
          directionalLockEnabled={true}
          contentContainerStyle={styles.scrollModal}
        >
          <TouchableWithoutFeedback>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {/* Cover Photo */}
                <Bubble
                  customStyles={styles.coverPhoto}
                  img={Images[`sb_${soundbite.img}`]}
                  genre={soundbite.genre}
                  large
                />

                <CustomButton
                  variantButton={soundbite.genre}
                  variantText="blackBaseText"
                  text={soundbite.title}
                  customStyles={{
                    alignSelf: "center",
                    marginTop: 24,
                    marginBottom: 16,
                  }}
                />

                {/* Last soundbites + View evolution */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  {/* <CustomButton
                    variantButton="primaryOutline"
                    variantText="grayBaseText"
                    text="Placeholder"
                    width="50%"
                  /> */}
                  {/* View Evolution Button */}
                  <CustomButton
                    variantButton="primaryOutline"
                    variantText="whiteBaseText"
                    text="view evolution"
                    width="60%"
                    customStyles={{ paddingHorizontal: 8, paddingVertical: 8 }}
                  />
                </View>

                {/* SoundCloudPlayer */}
                <SoundCloudPlayer
                  prevPeople={1}
                  variant="dark"
                  customStyles={{ marginBottom: 16 }}
                />

                {/* Profile preview */}
                <ProfilePreview />

                <CustomButton
                  variantButton="primaryShadow"
                  variantText="whiteBaseText"
                  text="Add To Sound"
                  width={"60%"}
                  customStyles={{ alignSelf: "center", paddingHorizontal: 12 }}
                >
                  <Feather name="plus" size={24} color={Colors.white} />
                  <CustomText customStyles={styles.addToSound}>
                    Add To Sound
                  </CustomText>
                </CustomButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

export default SoundbitePopup;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: Colors.background2,
    borderRadius: 24,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    position: "relative",
  },
  coverPhoto: {
    position: "absolute",
    top: -150,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  backdrop: {
    flex: 1,
    backgroundColor: `${Colors.background1}99`,
  },
  addToSound: {
    fontSize: 16,
    letterSpacing: 1.5,
    fontWeight: "bold",
    lineHeight: 24,
  },
});
