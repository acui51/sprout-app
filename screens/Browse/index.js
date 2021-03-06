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
  TextInput,
  AsyncStorage,
  Animated,
  Easing,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// Assets + Data
import { Metrics, Images, Colors } from "../../assets/Themes";
import { db, firestore } from "../../firebase";

// Components
import { CustomButton, Bubble, CustomText } from "../../components";
import { SoundbitePopup } from "./components";

export default ({ navigation }) => {
  const [soundbites, setSoundbites] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [batch, setBatch] = useState(1);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [verticalVal, setVerticalVal] = useState(new Animated.Value(0));

  // Soundbite in focus state - bring up soundbite modal or not
  const [soundbiteInFocus, setSoundbiteInFocus] = useState({
    soundbite: {},
    inFocus: false,
  });

  // Genres selected state
  const [genres, setGenres] = useState({
    edm: true,
    pop: true,
    country: true,
    hiphop: true,
    rnb: true,
    rock: true,
  });

  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (err) {
      console.log("Error @clearOnboarding: ", err);
    }
  };
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
          onPress={() => {
            clearOnboarding;
            setFilterVisible(true);
            // Comment this out to active 'deselecting'
            setGenres({
              edm: false,
              pop: false,
              country: false,
              hiphop: false,
              rnb: false,
              rock: false,
            });
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchWrapper}>
          <Feather
            style={{ marginRight: 8 }}
            name="search"
            size={24}
            color={Colors.white}
            onPress={() =>
              navigation.navigate("Profile", { profile: "honest_ocean" })
            }
          />
          <TextInput
            style={styles.searchText}
            placeholder="Search for users"
            placeholderTextColor={Colors.gray}
            onFocus={() => navigation.navigate("Search Users")}
          ></TextInput>
        </View>
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

  // Math.floor(Math.random() * 50) + 1
  // useEffect(() => {
  //   Animated.timing(verticalVal, {
  //     toValue: 50,
  //     duration: 1000,
  //     useNativeDriver: false,
  //     easing: Easing.inOut(Easing.quad),
  //   }).start();
  //   verticalVal.addListener(({ value }) => {
  //     if (value == 50) {
  //       Animated.timing(verticalVal, {
  //         toValue: 0,
  //         duration: 1000,
  //         useNativeDriver: false,
  //         easing: Easing.inOut(Easing.quad),
  //       }).start();
  //     } else if (value == 0) {
  //       Animated.timing(verticalVal, {
  //         toValue: 50,
  //         duration: 1000,
  //         useNativeDriver: false,
  //         easing: Easing.inOut(Easing.quad),
  //       }).start();
  //     }
  //   });
  // }, []);

  // Save changes callback
  const setFilteredSoundbites = () => {
    if (
      !genres.edm &&
      !genres.pop &&
      !genres.country &&
      !genres.hiphop &&
      !genres.rnb &&
      !genres.rock
    ) {
      setGenres({
        edm: true,
        pop: true,
        country: true,
        hiphop: true,
        rnb: true,
        rock: true,
      });
    }
    setFiltered(true);
  };

  // Check if filtered - replace
  let soundbitesToRender = soundbites;
  if (filtered) {
    soundbitesToRender = soundbitesToRender.filter((elem) => {
      return genres[elem.genre] === true;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.genreScroll}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Object.keys(genres).map((elem, i) => {
            if (genres[elem]) {
              return (
                <CustomButton
                  key={i}
                  text={elem.toUpperCase()}
                  variantButton={elem + "Shadow"}
                  variantText="smallBlackBaseText"
                  customStyles={{
                    marginRight: 16,
                    paddingVertical: 2,
                    paddingHorizontal: 16,
                  }}
                  disabled
                />
              );
            }
          })}
        </ScrollView>
      </View>

      {/* Load soundbites */}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.soundbitesWrapper}>
          {soundbitesToRender.map((elem, i) => (
            <View key={i} style={styles.soundbiteWrapper}>
              <View
                style={[
                  styles.soundbite,
                  {
                    top: Math.floor(Math.random() * 200) + 1,
                    left: Math.floor(Math.random() * 25) + 1,
                  },
                ]}
              >
                {/* <Animated.View
                  style={{
                    height: 100,
                    width: 100,
                    transform: [{ translateY: verticalVal }],
                  }}
                > */}
                <Bubble
                  key={i}
                  genre={elem.genre}
                  img={Images[`sb_${elem.imageName}`]}
                  animated
                  animatedValue={Math.floor(Math.random() * 20) + 1}
                  onPress={() => {
                    setSoundbiteInFocus({
                      soundbite: {
                        title: elem.title,
                        genre: elem.genre,
                        img: elem.imageName,
                        creator: elem.creator,
                      },
                      inFocus: true,
                    });
                  }}
                />
                {/* </Animated.View> */}
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Soundbite Popup */}
      {soundbiteInFocus.inFocus && (
        <SoundbitePopup
          soundbiteInFocus={soundbiteInFocus}
          setSoundbiteInFocus={setSoundbiteInFocus}
          soundbite={soundbiteInFocus.soundbite}
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
                      onPress={() => setGenres({ ...genres, edm: !genres.edm })}
                      customStyles={[
                        styles.genre,
                        !genres.edm && {
                          backgroundColor: `${Colors.colorful2}61`,
                        },
                      ]}
                    />
                    <CustomButton
                      text="POP"
                      variantButton="pop"
                      variantText="blackBaseText"
                      width={"31%"}
                      onPress={() => setGenres({ ...genres, pop: !genres.pop })}
                      customStyles={[
                        styles.genre,
                        !genres.pop && {
                          backgroundColor: `${Colors.colorful4}61`,
                        },
                      ]}
                    />
                    <CustomButton
                      text="COUNTRY"
                      variantButton="country"
                      variantText="blackBaseText"
                      width={"31%"}
                      onPress={() =>
                        setGenres({ ...genres, country: !genres.country })
                      }
                      customStyles={[
                        styles.genre,
                        { paddingHorizontal: 8 },
                        !genres.country && {
                          backgroundColor: `${Colors.colorful6}61`,
                        },
                      ]}
                    />
                    <CustomButton
                      text="HIP HOP"
                      variantButton="hiphop"
                      variantText="blackBaseText"
                      width={"31%"}
                      onPress={() =>
                        setGenres({ ...genres, hiphop: !genres.hiphop })
                      }
                      customStyles={[
                        styles.genre,
                        { paddingHorizontal: 8 },
                        !genres.hiphop && {
                          backgroundColor: `${Colors.colorful7}61`,
                        },
                      ]}
                    />
                    <CustomButton
                      text="RNB"
                      variantButton="rnb"
                      variantText="blackBaseText"
                      width={"31%"}
                      onPress={() => setGenres({ ...genres, rnb: !genres.rnb })}
                      customStyles={[
                        styles.genre,
                        !genres.rnb && {
                          backgroundColor: `${Colors.colorful3}61`,
                        },
                      ]}
                    />
                    <CustomButton
                      text="ROCK"
                      variantButton="rock"
                      variantText="blackBaseText"
                      width={"31%"}
                      onPress={() =>
                        setGenres({ ...genres, rock: !genres.rock })
                      }
                      customStyles={[
                        styles.genre,
                        !genres.rock && {
                          backgroundColor: `${Colors.colorful5}61`,
                        },
                      ]}
                    />
                  </View>
                  <View style={styles.filterButtons}>
                    <CustomText
                      customStyles={{ fontWeight: "700", color: Colors.gray }}
                    >
                      {Object.keys(genres).reduce(
                        (accumulator, currentValue) => {
                          if (genres[currentValue]) {
                            accumulator += 1;
                          }
                          return accumulator;
                        },
                        0
                      )}{" "}
                      genres selected
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
                  <CustomText
                    customStyles={{ fontWeight: "700", color: Colors.gray }}
                  >
                    *Default is all
                  </CustomText>
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
    marginTop: 8,
  },
  soundbiteWrapper: {
    flexBasis: "33%",
    height: "50%",
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
    zIndex: 100,
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
  genreScroll: {
    // height: "10%",
    marginTop: 8,
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
    backgroundColor: `${Colors.background1}99`,
  },
  searchWrapper: {
    borderRadius: 12,
    backgroundColor: Colors.background2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    // width: "100%",
    width: 248,
  },
  searchText: {
    color: Colors.white,
    fontSize: 14,
  },
});
