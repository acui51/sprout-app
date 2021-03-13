import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { CustomText } from "../../../../components";
// import { ConnectButtonCard } from "../../components";
import ConnectButtonCard from "../ConnectButtonCard";

const ConnectionNotificationCard = () => {
  const [deleted, setDeleted] = useState(false);
  return (
    <View>
      {deleted ? (
        <View style={styles.container}>
          <CustomText customStyles={styles.grayText}>
            No new connection requests.
          </CustomText>
        </View>
      ) : (
        <View style={styles.notificationBox}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Honest Profile")}> */}
            <Image style={styles.profileImage} source={Images.honest_ocean} />
          {/* </TouchableOpacity> */}
          <CustomText customStyles={styles.username}>
            brunetted
            <CustomText customStyles={styles.notificationText}>
              {" "}
              wants to connect with you.
              <CustomText customStyles={styles.notificationTime}>
                {" "}
                11h
              </CustomText>
            </CustomText>
          </CustomText>
          <ConnectButtonCard></ConnectButtonCard>
          <TouchableOpacity onPress={() => setDeleted(true)}>
            <Image
              source={Images.delete_button}
              style={styles.deleteButton}
            ></Image>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    alignContent: "center",
  },
  notificationBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background2,
    borderRadius: 20,
    height: 77,
    width: "100%",
    padding: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    flex: 1,
    fontSize: 13,
  },
  notificationText: {
    fontWeight: "normal",
    fontSize: 13,
  },
  notificationTime: {
    color: Colors.gray,
    fontSize: 13,
  },
  deleteButton: {
    margin: 5,
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  grayText: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 70,
  },
});

export default ConnectionNotificationCard;
