import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Modal,
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// Assets + Data
import { Metrics, Images, Colors } from "../../assets/Themes";
import { db, firestore } from "../../firebase";

// Components
import { CustomButton, Bubble, CustomText } from "../../components";

export default ({ navigation }) => {
  const [soundbites, setSoundbites] = useState([]);
  const [batch, setBatch] = useState(1);
  const [filterVisible, setFilterVisible] = useState(false);
  const { colors } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="refresh"
          size={24}
          color={Colors.white}
          onPress={() => (batch === 1 ? setBatch(2) : setBatch(1))}
        />
      ),
      headerRight: () => (
        <AntDesign
          name="filter"
          size={24}
          color={Colors.white}
          onPress={() => setFilterVisible(true)}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    // Fetch from soundbites
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
          });
      });
  }, [batch]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text="REFRESH"
        variantButton="edm"
        variantText="blackText"
        width={120}
        onPress={() => (batch === 1 ? setBatch(2) : setBatch(1))}
      />

      <View style={styles.soundbitesWrapper}>
        {soundbites.map((elem, i) => (
          <View key={i} style={styles.soundbiteWrapper}>
            <View style={[styles.soundbite]}>
              <Bubble
                key={i}
                genre={elem.genre}
                img={Images[`sb_${elem.imageName}`]}
              />
            </View>
          </View>
        ))}
      </View>
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
                  <CustomText customStyles={styles.modalTitle}>
                    Select Genre
                  </CustomText>

                  <View style={styles.filterGenres}>
                    <CustomButton
                      text="EDM"
                      variantButton="edmShadow"
                      variantText="blackText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                    <CustomButton
                      text="POP"
                      variantButton="pop"
                      variantText="blackText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                    <CustomButton
                      text="COUNTRY"
                      variantButton="country"
                      variantText="blackText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                    <CustomButton
                      text="HIP HOP"
                      variantButton="hiphop"
                      variantText="blackText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                    <CustomButton
                      text="RNB"
                      variantButton="rnb"
                      variantText="blackText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                    <CustomButton
                      text="ROCK"
                      variantButton="rock"
                      variantText="blackText"
                      width={"31%"}
                      customStyles={styles.genre}
                    />
                  </View>
                  <View style={styles.filterButtons}>
                    <CustomText>*Default is all</CustomText>
                    <CustomButton
                      text="Save Changes"
                      variantButton="primaryShadow"
                      variantText="whiteText"
                      width={150}
                      onPress={() => setFilterVisible(!filterVisible)}
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
