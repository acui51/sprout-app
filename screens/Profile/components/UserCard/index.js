import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../../../components";

/**
 *
 * @param {Images.<>} pfp
 */

//const navigation = useNavigation();
const UserCard = ({ username, text, pfp, customStyles }) => {
  return (
    <View style={styles.container}>
      <View style={styles.UserCard}>
        <Image style={styles.profileImage} source={pfp} />
        <View style={{ flexShrink: 1 }}>
          <CustomText customStyles={styles.username}>{username}</CustomText>
          <CustomText customStyles={styles.text}>{text}</CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  UserCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: Colors.background2,
    borderRadius: 20,
    height: 77,
    width: 327,
    padding: 15,
    //marginLeft: 15,
  },
  profileImage: {
    marginRight: 15,
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  username: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
  },
  text: {
    fontWeight: "normal",
    fontSize: 13,
  },
});

export default UserCard;
