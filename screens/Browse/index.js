import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// Assets + Data
import { Metrics, Images, Colors } from "../../assets/Themes";
import { db, firestore } from "../../firebase";

// Components
import { CustomButton, Bubble, CustomText } from "../../components";
import SoundbitePopup from "./components";

export default ({ navigation }) => {
  const [soundbites, setSoundbites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [batch, setBatch] = useState(1);
  const [filterVisible, setFilterVisible] = useState(false);
  const [soundbiteInFocus, setSoundbiteInFocus] = useState({
    soundbite: {},
    inFocus: false,
  });

  // Genres selected
  const [edmGenre, setEdmGenre] = useState(true);
  const [popGenre, setPopGenre] = useState(true);
  const [countryGenre, setCountryGenre] = useState(true);
  const [hiphopGenre, setHiphopGenre] = useState(true);
  const [rnbGenre, setRnbGenre] = useState(true);
  const [sockGenre, setRockGenre] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="refresh"
          size={32}
          color={Colors.white}
          style={{ marginLeft: Metrics.headerMarginHorizontal }}
          onPress={() => (batch === 1 ? setBatch(2) : setBatch(1))}
        />
      ),
      headerRight: () => (
        <AntDesign
          name="filter"
          size={32}
          color={Colors.white}
          style={{ marginRight: Metrics.headerMarginHorizontal }}
          onPress={() => setFilterVisible(true)}
        />
      ),
    });
  }, [navigation, batch]);

  useEffect(() => {
    // Fetch from soundbites

    setLoading(true);
    db.collection("browse")
      .doc(`${batch}`)
      .onSnapshot((doc) => {
        const soundbites = doc.data().soundbites;

        // Query for the soundbites in 'soundbites' collection
        db.collection("soundbites")
          .where(firestore.FieldPath.documentId(), "in", soundbites)
          .get()
          .then((querySnapshot) => {
            let arr = [];
            querySnapshot.forEach((doc) => {
              arr.push(doc.data());
            });
            setSoundbites(arr);
            setLoading(false);
          });
      });
  }, [batch]);

  const setFilteredSoundbites = () => {
    let copySoundbites = [];
    // let copySoundbites = soundbites.filter((elem) => {
    //   elem.genre !== "edm";
    // });
    copySoundbites.push(soundbites[0]);
    setSoundbites(copySoundbites);
  };

  console.log(soundbiteInFocus);

  return (
    <SafeAreaView style={styles.container}>
      {/* Load soundbites */}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.soundbitesWrapper}>
          {soundbites.map((elem, i) => (
            <View key={i} style={styles.soundbiteWrapper}>
              <View
                style={[
                  styles.soundbite,
                  {
                    top: Math.floor(Math.random() * 100) + 1,
                    left: Math.floor(Math.random() * 25) + 1,
                  },
                ]}
              >
                <Bubble
                  key={i}
                  genre={elem.genre}
                  img={Images[`sb_${elem.imageName}`]}
                  onPress={() =>
                    setSoundbiteInFocus({
                      sounbite: {
                        title: elem.title,
                        genre: elem.genre,
                        img: elem.imgName,
                      },
                      inFocus: true,
                    })
                  }
                />
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Soundbite Popup */}
      {soundbiteInFocus.inFocus && (
        <SoundbitePopup
          soundbiteInFocus
          setSoundbiteInFocus={setSoundbiteInFocus}
        ></SoundbitePopup>
      )}

      {/* Filter genre modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={filterVisible}
        onRequestClose={() => {
          setFilterVisible(!filterVisible);
        }}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPressOut={() => {
            setFilterVisible(false);
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
                    customStyles={[
                      styles.modalTitle,
                      { fontFamily: "Kollektif-Bold" },
                    ]}
                  >
                    Select Genre
                  </CustomText>

                  <View style={styles.filterGenres}>
                    <CustomButton
                      text="EDM"
                      variantButton="edmShadow"
                      variantText="blackBaseText"
                      width={"31%"}
                      onPress={() => setEdmGenre(!edmGenre)}
                      customStyles={[
                        styles.genre,
                        edmGenre && { opacity: 0.4 },
                      ]}
                    />
                    <CustomButton
                      text="POP"
                      variantButton="pop"
                      variantText="blackBaseText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                    <CustomButton
                      text="COUNTRY"
                      variantButton="country"
                      variantText="blackBaseText"
                      width={"31%"}
                      customStyles={[styles.genre, { paddingHorizontal: 8 }]}
                    />
                    <CustomButton
                      text="HIP HOP"
                      variantButton="hiphop"
                      variantText="blackBaseText"
                      width={"31%"}
                      customStyles={[styles.genre, { paddingHorizontal: 8 }]}
                    />
                    <CustomButton
                      text="RNB"
                      variantButton="rnb"
                      variantText="blackBaseText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                    <CustomButton
                      text="ROCK"
                      variantButton="rock"
                      variantText="blackBaseText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                  </View>
                  <View style={styles.filterButtons}>
                    <CustomText
                      customStyles={{ fontWeight: "700", color: Colors.gray }}
                    >
                      *Default is all
                    </CustomText>
                    <CustomButton
                      text="Save Changes"
                      variantButton="primaryShadow"
                      variantText="whiteBaseText"
                      width={200}
                      onPress={() => {
                        setFilterVisible(!filterVisible);
                        setFilteredSoundbites();
                      }}
                      customStyles={{
                        paddingHorizontal: 8,
                        paddingVertical: 10,
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: Metrics.marginVertical,
  },
  logo: {
    height: Metrics.icons.medium,
    resizeMode: "contain",
  },
  soundbitesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  soundbiteWrapper: {
    flexBasis: "33%",
    height: "33%",
    position: "relative",
  },
  soundbite: {
    position: "absolute",
    top: 100,
  },
  textStyle: {
    color: Colors.white,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  modalTitle: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 32,
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
  filterGenres: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 48,
  },
  filterButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  genre: {
    marginBottom: 10,
  },
  backdrop: {
    flex: 1,
  },
});
