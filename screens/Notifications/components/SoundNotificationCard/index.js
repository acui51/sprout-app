import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { CustomText } from "../../../../components";

const SoundNotificationCard = () => {
  const [deleted, setDeleted] = useState(false);
  return (
    <View>
      {deleted ? (
        <View style={styles.container}>
        <CustomText customStyles={styles.noRequestText}>
          No new connection requests.
        </CustomText>
      </View>
      ):(
        <View style={styles.notificationBox}>
      <Image style={styles.soundCover} source={Images.monster_cover} />
      <CustomText customStyles={styles.username}>
        "Monsters"
        <CustomText customStyles={styles.notificationText}>
          {" "}
          was added by djcobra to a branch you are in.
          <CustomText customStyles={styles.notificationTime}> 11h</CustomText>
        </CustomText>
      </CustomText>
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
  soundCover: {
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
  noRequestText: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 70,
  }
});

export default SoundNotificationCard;
