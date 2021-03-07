import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";

// Assets + Data
import { Colors, Images } from "../../../../assets/Themes";

// Components
import {
  CustomButton,
  CustomText,
  SoundCloudPlayer,
} from "../../../../components";

const SoundbitePopup = ({ soundbiteInFocus, setSoundbiteInFocus }) => {
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
                <CustomButton
                  variantButton="primaryOutline"
                  variantText="grayBaseText"
                  text="view evolution"
                />

                {/* SoundCloudPlayer */}
                <SoundCloudPlayer prevPeople={1} variant="light" />
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
    backgroundColor: Colors.background3,
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
    width: "100%",
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
});
