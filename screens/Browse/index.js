import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets + Data
import { Metrics, Images } from "../../assets/Themes";
import { db } from "../../firebase";

// Components
import { CustomButton, Bubble } from "../../components";

export default () => {
  const [soundbites, setSoundbites] = useState([]);
  const [batch, setBatch] = useState(1);
  const { colors } = useTheme();

  useEffect(() => {
    // Fetch from soundbites
    db.collection("browse")
      .doc(`${batch}`)
      .onSnapshot((doc) => {
        const soundbites = doc.data().soundbites;
        // Create promises from fetches to each soundbite_id doc
        let promises = Promise.all(
          soundbites.map((soundbite_id) => {
            return db.collection("soundbites").doc(`${soundbite_id}`).get();
          })
        );

        // Promise chain the promises and construct new array
        promises.then((querySnapshot) => {
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

      {/* TEST BUTTONS - CAN DELETE */}
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
  },
  logo: {
    height: Metrics.icons.medium,
    resizeMode: "contain",
  },
});
