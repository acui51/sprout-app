import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../../../components";

const ProfileCard = ({ name, bio, customStyles }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.wrapper, customStyles]}>
      <View style={styles.profileCard}>
        <Image style={styles.profileImage} source={Images.ariana_venti} />
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

      {/* Edit Profile, Connections, Inbox Buttons */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <CustomButton
          variantButton="profileOutline"
          variantText="whiteProfileText"
          text="Edit Profile"
          width={"33%"}
          customStyles={{ marginRight: 8 }}
        />
        <CustomButton
          variantButton="grayProfileOutline"
          variantText="whiteProfileText"
          text="Connections"
          width={"36%"}
          customStyles={{ marginRight: 8 }}
          onPress={() => navigation.navigate("My Connections")}
        />
        <CustomButton
          variantButton="grayProfileOutline"
          variantText="whiteProfileText"
          text="Inbox"
          width={"33%"}
          text="Inbox"
          customStyles={{ position: "relative" }}
          notification
          onPress={() => navigation.navigate("My Inbox")}
        />
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
    marginBottom: 20,
    // flexWrap: "wrap",
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
