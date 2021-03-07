import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { AntDesign } from "@expo/vector-icons";

// Assets
import { Colors, Images } from "../../assets/Themes";
import { CustomText } from "../../components";
import Container from "../../hoc/Container";

const CoverPhoto = ({ navigation }) => {
  const [country, setCountry] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(false);

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
            label: "USA",
            value: "usa",
          },
          {
            label: "UK",
            value: "uk",
          },
          {
            label: "France",
            value: "france",
          },
        ]}
        defaultValue={country}
        placeholder="Select Genre"
        labelStyle={{ fontSize: 14, color: Colors.gray }}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa", width: "60%" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa", width: "60%" }}
        onChangeItem={(item) => setCountry(item.value)}
      />
    </Container>
  );
};

export default CoverPhoto;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  coverPhoto: {
    marginTop: 56,
    marginBottom: 88,
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
});
