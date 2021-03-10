import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

// Assets
import { Colors } from "../../../../assets/Themes";

// Components
import { CustomText } from "../../../../components";

const ConnectionButtonCard = () => {
  const [connected, setConnected] = useState(false);
  return (
    <View >
      {connected ? (
        <TouchableOpacity onPress={() => setConnected(false)}>
          <View style={styles.checkButton}>
            <Entypo name="check" size={24} color={Colors.primary} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setConnected(true)}>
          <View style={styles.addButton}>
            <CustomText customStyles={{ fontSize: 25 }}>+</CustomText>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: Colors.primary,
    width: 33,
    height: 33,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: "center",
  },
  checkButton: {
    backgroundColor: Colors.white,
    width: 33,
    height: 33,
    borderRadius: 20,
    paddingTop: 5,
    marginLeft: 10,
    alignItems: "center",
  },
});

export default ConnectionButtonCard;
