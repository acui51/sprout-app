import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";

// Assets
import { Colors, Images } from "../../assets/Themes";
import { CustomText, CustomButton } from "../../components";
import Container from "../../hoc/Container";
import { db, firestore } from "../../firebase";

const CoverPhoto = ({ navigation }) => {
  const [genre, setGenre] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(false);
  const [text, setText] = useState("");

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
    });
  }, [navigation]);

  const postSoundbite = () => {
    db.collection("soundbites")
      .add({
        genre: genre,
        imageName: "rockPow",
        title: text,
      })
      .then((docRef) => {
        // docRef.id
        console.log("docRefId", docRef.id);
        let ref = db.collection("users").doc("ariana_venti");

        // Atomically add a new region to the "featured_soundbites" array field.
        ref
          .update({
            featured_soundbites: firestore.FieldValue.arrayUnion(
              `${docRef.id}`
            ),
          })
          // Once promise is resolved -> navigate to ProfileTab
          .then(() => navigation.navigate("ProfileTab", { screen: "Profile" }));
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Container customStyles={styles.container}>
      {/* Title Input */}
      <TextInput
        style={styles.titleInput}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Title"
        placeholderTextColor={Colors.gray}
      />

      {coverPhoto ? (
        <TouchableOpacity onPress={() => setCoverPhoto(!coverPhoto)}>
          <Image style={styles.coverPhoto} source={Images.uploadPhoto} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setCoverPhoto(!coverPhoto)}>
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
          width: "75%",
          borderWidth: 0,
        }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa", width: "75%" }}
        onChangeItem={(item) => setGenre(item.value)}
      />
      <CustomButton
        text="Post"
        variantButton="primaryShadow"
        variantText="whiteBaseText"
        width={120}
        onPress={() => {
          postSoundbite();
        }}
        customStyles={[
          styles.button,
          (!genre || !coverPhoto || text === "") && { opacity: 0.4 },
        ]}
        disabled={!genre || !coverPhoto || text === ""}
      />
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
});
