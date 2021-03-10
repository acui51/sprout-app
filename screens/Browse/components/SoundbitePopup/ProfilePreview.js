import React from "react";
import { StyleSheet, View, Image } from "react-native";

// Data + assets
import { Colors, Images } from "../../../../assets/Themes";

// Components
import { CustomText } from "../../../../components";

export const ProfilePreview = ({ customStyles }) => {
  return (
    <View style={[styles.container, customStyles]}>
      {/* Person Profile Pic */}
      <View>
        <Image style={styles.pfp} source={Images.dj_cobra} />
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
});
