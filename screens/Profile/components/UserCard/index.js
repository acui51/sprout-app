import React from "react";
import { View, Image, StyleSheet } from "react-native";
// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../../../components";

/**
 *
 * @param {Images.<>} pfp
 */

const UserCard = ({
  username,
  text,
  pfp,
  boldtext,
  notification,
  customStyles,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.UserCard}>
        <Image style={styles.profileImage} source={pfp} />
        <View style={{ flexShrink: 1 }}>
          <CustomText customStyles={styles.username}>{username}</CustomText>
          <CustomText customStyles={styles.boldtext}>
            {boldtext}
            <CustomText customStyles={styles.text}>{text}</CustomText>
          </CustomText>
        </View>
        {notification && <View style={styles.notificationDot} />}
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
    //width: 327,
    padding: 15,
    //marginLeft: 10,
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
  boldtext: {
    fontWeight: "bold",
    fontSize: 13,
  },
  notificationDot: {
    backgroundColor: Colors.primary,
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 20,
  },
});

export default UserCard;
