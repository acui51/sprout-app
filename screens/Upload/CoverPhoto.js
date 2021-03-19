import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// Assets
import { Colors, Images, Metrics } from "../../assets/Themes";
import { CustomText, CustomButton } from "../../components";
import Container from "../../hoc/Container";
import { db, firestore } from "../../firebase";

const CoverPhoto = ({ navigation }) => {
  const [genre, setGenre] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(false);
  const [selectedCoverPhoto, setSelectedCoverPhoto] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingInterval, setLoadingInterval] = useState(0);
  const [uploadingTimeout, setUploadingTimeout] = useState(null);
  const [uploadingInterval, setUploadingInterval] = useState(null);
  const [coverPhotoModal, setCoverPhotoModal] = useState(false);
  const [selectedCP, setSelectedCP] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ justifyContent: "center" }}>
          <CustomText
            customStyles={{
              fontSize: 16,
              fontWeight: "700",
              marginBottom: 8,
              paddingHorizontal: 28,
            }}
          >
            3/3: Title and Tag
          </CustomText>
          <View style={styles.backgroundBar}>
            <View style={styles.progressBar}></View>
          </View>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.close}
          onPress={() =>
            navigation.navigate("BrowseTab", { screen: "Explore" })
          }
        >
          <Ionicons name="close" size={16} color={Colors.white} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Simulate a 2 second uploading percentage grower for the soundbite uploading
  const interval = (percentage) =>
    setInterval(() => {
      percentage += 5;
      setLoadingInterval(percentage);
    }, 100);

  const postSoundbite = () => {
    setLoading(true);
    db.collection("soundbites")
      .add({
        genre: genre,
        // imageName: "rockPow",
        imageName: selectedCoverPhoto.substring(3),
        title: text,
        date: Date.now(),
        creator: "ariana_venti",
      })
      .then((docRef) => {
        // docRef.id
        console.log("docRefId", docRef.id);
        let ref = db.collection("users").doc("ariana_venti");

        // Start the interval counter
        let percentage = 0;
        let uploadingInterval = interval(percentage);
        setUploadingInterval(uploadingInterval);

        // Set the timeout function to state - so we can clear it
        setUploadingTimeout(() =>
          setTimeout(() => {
            // Clear the interval after 2 seconds
            clearInterval(uploadingInterval);

            // Atomically add a new region to the "featured_soundbites" array field.
            ref
              .update({
                all_soundbites: firestore.FieldValue.arrayUnion(`${docRef.id}`),
              })
              // Once promise is resolved -> navigate to ProfileTab
              .then(() => {
                navigation.navigate("ProfileTab", {
                  screen: "Profile",
                  params: { view: "all" },
                });
                setLoading(false);
              });
          }, 2000)
        );
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Container customStyles={styles.container}>
      {/* Select cover photos modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={coverPhotoModal}
        onRequestClose={() => setCoverPhotoModal(!coverPhotoModal)}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPressOut={() => {
            setCoverPhotoModal(!coverPhotoModal);
          }}
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
                      fontWeight: "700",
                      alignSelf: "center",
                      marginBottom: 24,
                    }}
                  >
                    Select a Photo
                  </CustomText>
                  <View style={styles.selectCoverPhoto}>
                    <TouchableOpacity
                      style={{ margin: 12 }}
                      onPress={() => {
                        setSelectedCP("sb_unicorn");
                      }}
                    >
                      <Image
                        style={[
                          styles.photo,
                          selectedCP === "sb_unicorn" && styles.selectedCP,
                        ]}
                        source={Images.sb_unicorn}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ margin: 12 }}
                      onPress={() => {
                        setSelectedCP("sb_rockPow");
                      }}
                    >
                      <Image
                        style={[
                          styles.photo,
                          selectedCP === "sb_rockPow" && styles.selectedCP,
                        ]}
                        source={Images.sb_rockPow}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ margin: 12 }}
                      onPress={() => {
                        setSelectedCP("sb_popBanana");
                      }}
                    >
                      <Image
                        style={[
                          styles.photo,
                          selectedCP === "sb_popBanana" && styles.selectedCP,
                        ]}
                        source={Images.sb_popBanana}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ margin: 12 }}
                      onPress={() => {
                        setSelectedCP("sb_popCherry");
                      }}
                    >
                      <Image
                        style={[
                          styles.photo,
                          selectedCP === "sb_popCherry" && styles.selectedCP,
                        ]}
                        source={Images.sb_popCherry}
                      />
                    </TouchableOpacity>

                    <CustomButton
                      variantButton="primaryShadow"
                      variantText="whiteBaseText"
                      text="Select"
                      onPress={() => {
                        setSelectedCoverPhoto(selectedCP);
                        setCoverPhotoModal(false);
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>

      {/* Title Input */}

      <TextInput
        style={styles.titleInput}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Title"
        placeholderTextColor={Colors.gray}
      />

      {selectedCoverPhoto ? (
        <TouchableOpacity onPress={() => setCoverPhotoModal(!coverPhotoModal)}>
          <Image
            style={styles.coverPhoto}
            source={Images[selectedCoverPhoto]}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setCoverPhotoModal(!coverPhotoModal)}>
          <View style={styles.coverPhoto}>
            <AntDesign
              name="pluscircleo"
              size={50}
              color={Colors.gray}
              style={{ marginBottom: 16 }}
            />
            <CustomText customStyles={styles.uploadPhotoText}>
              Upload Cover Photo
            </CustomText>
          </View>
        </TouchableOpacity>
      )}

      {/* Genre dropdown picker */}
      <DropDownPicker
        items={[
          {
            label: "ROCK",
            value: "rock",
            icon: () => (
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: Colors.colorful5,
                  borderRadius: 7,
                }}
              ></View>
            ),
          },
          {
            label: "RNB",
            value: "rnb",
            icon: () => (
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: Colors.colorful3,
                  borderRadius: 7,
                }}
              ></View>
            ),
          },
          {
            label: "EDM",
            value: "edm",
            icon: () => (
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: Colors.colorful2,
                  borderRadius: 7,
                }}
              ></View>
            ),
          },
          {
            label: "POP",
            value: "pop",
            icon: () => (
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: Colors.colorful4,
                  borderRadius: 7,
                }}
              ></View>
            ),
          },
          {
            label: "COUNTRY",
            value: "country",
            icon: () => (
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: Colors.colorful6,
                  borderRadius: 7,
                }}
              ></View>
            ),
          },
          {
            label: "HIP HOP",
            value: "hiphop",
            icon: () => (
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: Colors.colorful7,
                  borderRadius: 7,
                }}
              ></View>
            ),
          },
        ]}
        defaultValue={genre}
        placeholder={"Select Genre"}
        placeholderStyle={{
          fontWeight: "bold",
          color: Colors.gray,
        }}
        labelStyle={{
          fontSize: 14,
          color: Colors.background1,
        }}
        selectedLabelStyle={{
          color: Colors.gray,
          fontWeight: "700",
        }}
        containerStyle={{ height: 40 }}
        arrowColor={Colors.gray}
        style={{
          backgroundColor: Colors.background2,
          width: "90%",
          borderWidth: 0,
        }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa", width: "90%" }}
        onChangeItem={(item) => setGenre(item.value)}
      />

      {/* Post button */}
      <CustomButton
        text="Post"
        variantButton="primaryShadow"
        variantText="whiteBaseText"
        width={loading ? 200 : 120}
        onPress={() => {
          postSoundbite();
        }}
        customStyles={[
          styles.button,
          (!genre || !selectedCoverPhoto || text === "") && { opacity: 0.4 },
        ]}
        disabled={!genre || !selectedCoverPhoto || text === ""}
      >
        {loading && (
          <>
            <CustomText
              customStyles={styles.uploadingText}
            >{`${loadingInterval}%`}</CustomText>
            <CustomText customStyles={styles.uploadingText}>
              Uploading
            </CustomText>
            <TouchableOpacity
              style={styles.stopUploading}
              onPress={() => {
                clearTimeout(uploadingTimeout);
                clearInterval(uploadingInterval);
                setLoading(false);
              }}
            >
              <Ionicons name="close" size={16} color={Colors.primary} />
            </TouchableOpacity>
          </>
        )}
      </CustomButton>
    </Container>
  );
};

export default CoverPhoto;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  coverPhoto: {
    height: undefined,
    width: 300,
    aspectRatio: 1,
    borderRadius: 300 / 2,
    backgroundColor: Colors.background2,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    height: undefined,
    width: 125,
    aspectRatio: 1,
    backgroundColor: Colors.background2,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadPhotoText: {
    color: Colors.gray,
    fontWeight: "700",
    fontSize: 16,
  },
  titleInput: {
    backgroundColor: Colors.background2,
    width: "100%",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "700",
    color: Colors.gray,
  },
  backgroundBar: {
    flexBasis: "75%",
    backgroundColor: "#C4C4C4",
    maxHeight: 8,
    borderRadius: 24,
    position: "relative",
  },
  progressBar: {
    backgroundColor: Colors.primary,
    height: 8,
    borderRadius: 24,
    width: "100%",
    position: "absolute",
  },
  close: {
    backgroundColor: Colors.primary,
    height: 24,
    width: 24,
    borderRadius: 12,
    marginRight: Metrics.headerMarginHorizontal,
    alignItems: "center",
    justifyContent: "center",
  },
  stopUploading: {
    backgroundColor: Colors.white,
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  uploadingText: {
    fontSize: 16,
    letterSpacing: 1.5,
    fontWeight: "bold",
    lineHeight: 24,
    marginLeft: 8,
  },
  backdrop: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.background2,
    borderRadius: 20,
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
    marginTop: 30,
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
  selectCoverPhoto: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  selectedCP: {
    borderColor: Colors.primary,
    borderWidth: 5,
    borderRadius: 125 / 2,
  },
});
