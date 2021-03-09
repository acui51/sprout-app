import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Assets
import { Colors, Images } from "../../assets/Themes";
import { CustomText, CustomButton } from "../../components";
import Container from "../../hoc/Container";

const CoverPhoto = ({ navigation }) => {
  const [genre, setGenre] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(false);
  const [text, setText] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <CustomText customStyles={{ fontSize: 16, fontWeight: "700" }}>
          3/3: Title and Tag
        </CustomText>
      ),
    });
  }, [navigation]);

  return (
    <Container customStyles={styles.container}>
      {/* Title Input */}
      <TextInput
        style={styles.titleInput}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Title"
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
            label: "Rock",
            value: "rock",
          },
          {
            label: "RNB",
            value: "rnb",
          },
          {
            label: "EDM",
            value: "edm",
          },
        ]}
        defaultValue={genre}
        placeholder="Select Genre"
        labelStyle={{ fontSize: 14, color: Colors.gray }}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa", width: "60%" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa", width: "60%" }}
        onChangeItem={(item) => setGenre(item.value)}
      />
      <CustomButton
        text="Post"
        variantButton="primaryShadow"
        variantText="whiteBaseText"
        width={120}
        onPress={() =>
          navigation.navigate(
            "ProfileTab",
            {},
            NavigationActions.navigate({
              routeName: "Profile",
            })
          )
        }
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
    height: 272,
    width: 272,
    borderRadius: 136,
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
    backgroundColor: Colors.background3,
    width: "65%",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "700",
    color: Colors.background1,
  },
});
