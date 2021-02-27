import React from "react";
import { View, Image, StyleSheet } from "react-native";

// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../../../components";

const ProfileCard = ({ name, bio, buttonText, customStyles }) => {
  return (
    <View style={[styles.profileCard, customStyles]}>
      <Image style={styles.profileImage} source={Images.ariana_venti} />
      <View style={{ flexShrink: 1 }}>
        <CustomText customStyles={styles.name}>{name}</CustomText>
        <CustomText customStyles={styles.bio}>{bio}</CustomText>
        <CustomButton
          text={buttonText}
          variantButton="primaryOutline"
          variantText="whiteText"
          width={120}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  profileImage: {
    marginRight: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  bio: {
    fontSize: 13,
    marginBottom: 16,
    color: Colors.gray,
  },
});

export default ProfileCard;
