import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Assets + DATA
import { Metrics, Colors, Images } from "../../assets/Themes";
import { db, firestore } from "../../firebase";

// Components
import { Bubble, CustomText, CustomButton } from "../../components";
import Container from "../../hoc/Container";
import { ProfileCard } from "./components";
import { SoundbitePopup } from "../Browse/components";

// Sorts the soundbites based on their date property
const compareSoundbites = (a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
};

export default ({ route }) => {
  // let screenView = "featured";
  // if (route.params && route.params.view) {
  //   screenView = route.params.view;
  // }
  const [view, setView] = useState("featured");
  const [loading, setLoading] = useState(false);
  const [soundbites, setSoundbites] = useState([]);

  // 0 - connect
  // 1 - requested
  // 2 - connected
  const [connectStatus, setConnectStatus] = useState(0);

  let connectText;
  let connectStyle;
  if (connectStatus === 0) {
    connectText = "Connect";
    connectStyle = "profileOutline";
  } else if (connectStatus === 1 && route.params.profile === "honest_ocean") {
    connectText = "Connected";
    connectStyle = "profileShadow";
  } else if (connectStatus === 1) {
    connectText = "Requested";
    connectStyle = "profileOutline";
  } else {
    connectText = "Connected";
    connectStyle = "profileShadow";
  }

  let firstName, lastName;
  if (route.params && route.params.profile) {
    let arrName = route.params.profile.split("_");
    firstName = arrName[0].charAt(0).toUpperCase() + arrName[0].slice(1);
    lastName = arrName[1].charAt(0).toUpperCase() + arrName[1].slice(1);
  }

  // Soundbite in focus state - bring up soundbite modal or not
  const [soundbiteInFocus, setSoundbiteInFocus] = useState({
    soundbite: {},
    inFocus: false,
  });

  const navigation = useNavigation();

  useEffect(() => {
    if (route.params && route.params.view) {
      let passedInView = route.params.view;
      setView(passedInView);
    }
  }, []);

  useEffect(() => {
    let profileName;
    if (route.params && route.params.profile) {
      profileName = route.params.profile;
    } else {
      profileName = "ariana_venti";
    }

    // Fetch from soundbites
    setLoading(true);
    db.collection("users")
      .doc(profileName)
      .onSnapshot((doc) => {
        const soundbites = doc.data()[`${view}_soundbites`];

        // Query for the soundbites in 'soundbites' collection
        db.collection("soundbites")
          .where(firestore.FieldPath.documentId(), "in", soundbites)
          .get()
          .then((querySnapshot) => {
            let arr = [];
            querySnapshot.forEach((doc) => {
              arr.push(doc.data());
            });
            setSoundbites(arr.reverse());
            setLoading(false);
          });
      });
  }, [view]);

  // let profileToUsername = {
  //   honest_ocean: "brunetted"
  // }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        route.params && route.params.profile
          ? route.params.profile === "honest_ocean"
            ? "@brunetted"
            : `@${route.params.profile}`
          : "@arianaventi",
    });
  }, [navigation]);

  return (
    <Container customStyles={styles.container}>
      {/* Soundbite Popup */}
      {soundbiteInFocus.inFocus && (
        <SoundbitePopup
          soundbiteInFocus={soundbiteInFocus}
          setSoundbiteInFocus={setSoundbiteInFocus}
          soundbite={soundbiteInFocus.soundbite}
        ></SoundbitePopup>
      )}

      {/* Profile Card at Top */}
      {route.params && route.params.profile ? (
        <ProfileCard
          name={`${firstName} ${lastName}`}
          bio="I love pizza almost as much as making music 👌"
          pfp={Images[route.params.profile]}
          buttonText="Connect"
        />
      ) : (
        <ProfileCard
          name="Ariana Venti"
          bio="I love pizza almost as much as making music 👌"
          pfp={Images.ariana_venti}
          buttonText="Edit Profile"
        />
      )}
      <View style={styles.buttonWrapper}>
        <CustomButton
          variantButton={
            route.params && route.params.profile
              ? connectStyle
              : "profileOutline"
          }
          variantText="whiteProfileText"
          text={
            route.params && route.params.profile ? connectText : "Edit Profile"
          }
          width={"35%"}
          customStyles={{ marginRight: 8 }}
          onPress={() => {
            route.params && route.params.profile
              ? setConnectStatus(connectStatus + 1)
              : null;
          }}
        />
        <CustomButton
          variantButton="grayProfileOutline"
          variantText="whiteProfileText"
          text="Connections"
          width={"39%"}
          customStyles={{ marginRight: 8 }}
          onPress={() =>
            navigation.navigate(
              route.params && route.params.profile
                ? "Other Connection"
                : "My Network",
              route.params &&
                route.params.profile && { profile: route.params.profile }
            )
          }
        />
        <CustomButton
          variantButton="grayProfileOutline"
          variantText="whiteProfileText"
          text="Inbox"
          width={"29%"}
          text={route.params && route.params.profile ? "Message" : "Inbox"}
          customStyles={{ position: "relative" }}
          notification={route.params && route.params.profile ? false : true}
          onPress={() =>
            navigation.navigate(
              route.params && route.params.profile ? "Other Inbox" : "My Inbox",
              route.params &&
                route.params.profile && { profile: route.params.profile }
            )
          }
        />
      </View>
      {/* Featured All Switcher */}
      <View style={styles.featuredAllSwitch}>
        <TouchableOpacity
          style={{ marginHorizontal: 40 }}
          onPress={() => setView("featured")}
        >
          <View
            style={[
              styles.contentWrap,
              view === "featured" && {
                borderBottomColor: Colors.white,
                borderBottomWidth: 2,
              },
            ]}
          >
            <CustomText
              customStyles={[
                styles.featuredAllText,
                { fontFamily: "Kollektif-Bold" },
                view === "all" && { color: Colors.gray },
              ]}
            >
              Featured
            </CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginHorizontal: 40 }}
          onPress={() => setView("all")}
        >
          <View
            style={[
              styles.contentWrap,
              view === "all" && {
                borderBottomColor: Colors.white,
                borderBottomWidth: 2,
              },
            ]}
          >
            <CustomText
              customStyles={[
                styles.featuredAllText,
                { fontFamily: "Kollektif-Bold" },
                view === "featured" && { color: Colors.gray },
              ]}
            >
              All
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>

      {/* User's Soundbites - Featured or All */}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.soundbitesWrapper}>
          {soundbites.sort(compareSoundbites).map((elem, i) => (
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
                  customStyles={{ marginBottom: 8 }}
                  // animated
                  // animatedValue={Math.floor(Math.random() * 15) + 1}
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

                {/* If the soundbite is less than 15 seconds, render a 'new' tag */}
                {Date.now() - elem.date < 15000 && (
                  <CustomText customStyles={{ fontWeight: "700" }}>
                    Uploaded! 🎉
                  </CustomText>
                )}
              </View>
            </View>
          ))}
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  buttonWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  logo: {
    height: Metrics.icons.xl,
    resizeMode: "contain",
  },
  featuredAllSwitch: {
    flexDirection: "row",
    marginBottom: 32,
  },
  featuredAllText: {
    fontSize: 20,
    fontWeight: "700",
  },
  contentWrap: {
    alignSelf: "baseline",
    paddingBottom: 4,
  },
  soundbitesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  soundbiteWrapper: {
    flexBasis: "50%",
    height: "50%",
    position: "relative",
  },
  soundbite: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});
