import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

// Assets
import { Images, Colors, Metrics } from "../../../../assets/Themes";

// Components
import { CustomText } from "../../../../components";

const SoundNotificationCard = () => {
  const [connected, setConnected] = useState(false);
  return (
    <View style={styles.notificationBox}>
      <Image style={styles.profileImage} source={Images.honest_ocean} />
      <CustomText customStyles={styles.username}>
        brunetted
        <CustomText customStyles={styles.notificationText}>
          {" "}
          wants to connect with you.
          <CustomText customStyles={styles.notificationTime}> 11h</CustomText>
        </CustomText>
      </CustomText>
      {connected ? (
        <TouchableOpacity onPress={() => setConnected(false)}>
          <View style={styles.checkButton}>
            <CustomText customStyles={{ fontSize: 25 }}>*</CustomText>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setConnected(true)}>
          <View style={styles.addButton}>
            <CustomText customStyles={{ fontSize: 25 }}>+</CustomText>
          </View>
        </TouchableOpacity>
      )}
      {/* <TouchableOpacity onPress={() => setState("add")}>
                <View style={styles.addButton}>
                    <CustomText customStyles= {{fontSize: 25}}>+</CustomText>
                </View>
            </TouchableOpacity> */}

      <TouchableOpacity>
        <Image
          source={Images.delete_button}
          style={styles.deleteButton}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 20,
    height: 77,
    width: 315,
    padding: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  username: {
    color: Colors.black,
    fontWeight: "bold",
    flex: 1,
    fontSize: 13,
  },
  notificationText: {
    color: Colors.black,
    fontWeight: "normal",
    fontSize: 13,
  },
  notificationTime: {
    color: Colors.gray,
    fontSize: 13,
  },
  addButton: {
    backgroundColor: Colors.primary,
    width: 33,
    height: 33,
    borderRadius: 20,
    alignItems: "center",
  },
  deleteButton: {
    margin: 5,
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  checkButton: {
    backgroundColor: Colors.white,
    color: Colors.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SoundNotificationCard;
