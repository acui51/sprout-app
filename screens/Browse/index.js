import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// Assets + Data
import { Metrics, Images, Colors } from "../../assets/Themes";
import { db, firestore } from "../../firebase";

// Components
import { CustomButton, Bubble } from "../../components";

export default ({ navigation }) => {
  const [soundbites, setSoundbites] = useState([]);
  const [batch, setBatch] = useState(1);
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
        <AntDesign name="filter" size={24} color={Colors.white} />
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
      <Text style={{ color: colors.text1 }}>Browse</Text>
      <CustomButton
        text="REFRESH"
        variantButton="edm"
        variantText="blackText"
        width={120}
        onPress={() => (batch === 1 ? setBatch(2) : setBatch(1))}
      />

      {soundbites.map((elem, i) => (
        <Bubble
          key={i}
          genre={elem.genre}
          img={Images[`sb_${elem.imageName}`]}
        />
      ))}
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
});
