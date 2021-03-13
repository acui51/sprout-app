import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

// Assets + DATA
import { Metrics, Colors, Images } from "../../../assets/Themes";
import { db, firestore } from "../../../firebase";

// Components
import { Bubble, CustomText, CustomButton } from "../../../components";
import Container from "../../../hoc/Container";
import { ProfileCard } from ".";
import { SoundbitePopup } from "../../Browse/components";

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

export default function OtherProfile({navigation}) {
  const [view, setView] = useState("featured");
  const [loading, setLoading] = useState(false);
  const [soundbites, setSoundbites] = useState([]);
  const [connected, setConnected] = useState(false);

  // Soundbite in focus state - bring up soundbite modal or not
  const [soundbiteInFocus, setSoundbiteInFocus] = useState({
    soundbite: {},
    inFocus: false,
  });

  useEffect(() => {
    // Fetch from soundbites
    setLoading(true);
    db.collection("users")
      .doc("honest_ocean")
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
      <ProfileCard
        name="Honest Ocean"
        bio="Combining songs from different genres since ‘95!"
        pfp={Images.honest_ocean}
      />
      <View style={styles.buttonWrapper}>
      {connected ? (
        <CustomButton
          variantButton="profileGradient"
          variantText="whiteProfileText"
          text="Connected"
          width={"35%"}
          onPress={() => setConnected(false)}
          customStyles={{ marginRight: 8 }}
        />):(
          <CustomButton
          variantButton="profileShadow"
          variantText="whiteProfileText"
          text="Connect"
          width={"35%"}
          onPress={() => setConnected(true)}
          customStyles={{ marginRight: 8 }}
        />
        )}
        <CustomButton
          variantButton="grayProfileOutline"
          variantText="whiteProfileText"
          text="Connections"
          width={"38%"}
          customStyles={{ marginRight: 8 }}
          onPress={() => navigation.navigate("My Network")}
        />
        <CustomButton
          variantButton="grayProfileOutline"
          variantText="whiteProfileText"
          width={"31%"}
          text="Message"
          customStyles={{ position: "relative" }}
          onPress={() => navigation.navigate("My Inbox")}
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
