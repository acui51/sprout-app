import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../../../components";

const ProfileCard = ({ name, bio, pfp, customStyles }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.wrapper, customStyles]}>
      <View style={styles.profileCard}>
        <Image style={styles.profileImage} source={pfp} />
        <View style={{ flexShrink: 1 }}>
          <CustomText customStyles={styles.name}>{name}</CustomText>
          <CustomText customStyles={styles.bio}>{bio}</CustomText>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="instagram"
              size={30}
              color={Colors.white}
              style={{ marginRight: 24 }}
            />
            <FontAwesome name="spotify" size={30} color={Colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 50,
  },
  profileCard: {
    flexDirection: "row",
  },
  profileImage: {
    marginRight: 24,
    width: 90,
    height: 90,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  bio: {
    fontSize: 13,
    marginBottom: 16,
    color: Colors.white,
  },
});

export default ProfileCard;
