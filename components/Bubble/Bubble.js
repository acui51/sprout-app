import React from "react";
import { View, Text, Image } from "react-native";

// Assets
import { Images } from "../../assets/Themes";

export function Bubble() {
  return (
    <View>
      {/* Three Circles - image, black, genre color */}
      <Text>Bubble</Text>
      <Image source={Images.tameImpala} />
    </View>
  );
}
