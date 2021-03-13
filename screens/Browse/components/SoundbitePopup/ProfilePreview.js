import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// Data + assets
import { Colors, Images } from "../../../../assets/Themes";

// Components
import { CustomText } from "../../../../components";

export const ProfilePreview = ({ creator, customStyles }) => {
  const [connected, setConnected] = useState(false);

  return (
    <View style={[styles.container, customStyles]}>
      {/* Person Profile Pic */}
      <View style={{ position: "relative" }}>
        {creator ? (
          <Image style={styles.pfp} source={Images[creator]} />
        ) : (
          <Image style={styles.pfp} source={Images.dj_cobra} />
        )}
        {connected ? (
          <TouchableOpacity onPress={() => setConnected(!connected)}>
            <View style={styles.addedButton}>
              <Entypo name="check" size={12} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setConnected(!connected)}>
            {/* Don't show the add button if the user is ariana_venti */}
            {creator !== "ariana_venti" && (
              <View style={styles.addButton}>
                <Feather name="plus" size={12} color={Colors.white} />
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* Profile Bio + Name */}
      <View style={{ flexShrink: 1 }}>
        <CustomText customStyles={styles.name}>First Last</CustomText>
        <CustomText>Bonjour!! I love baguettes and old school rock.</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // paddingHorizontal: 25,
    justifyContent: "space-between",
    marginBottom: 24,
  },
  name: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
  },
  pfp: {
    height: 64,
    width: 64,
    marginRight: 16,
  },
  addButton: {
    position: "absolute",
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: Colors.primary,
    bottom: 0,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  addedButton: {
    position: "absolute",
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: Colors.white,
    bottom: 0,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
