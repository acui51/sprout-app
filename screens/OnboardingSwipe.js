import React from "react";
import { Image, View, StatusBar, Dimensions, Button, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import CustomButton from "../components";

import {useNavigation} from "@react-navigation/native";

export default ({onDone} ) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper loop={false} showsButtons={true}>
        <View>
          <Image
            style={styles.slide}
            source={require("../assets/Images/onboarding/Discover.png")}
          />
        </View>
        <View>
          <Image
            style={styles.slide}
            source={require("../assets/Images/onboarding/Add.png")}
          />
        </View>
        <View>
          <Image
            style={styles.slide}
            source={require("../assets/Images/onboarding/Seed.png")}
          />
        </View>
        <View>
          <Image
            style={styles.slide}
            source={require("../assets/Images/onboarding/Evolve.png")}
          />
        </View>
        <View>
          <View>
            <Image
              style={styles.slide}
              source={require("../assets/Images/onboarding/Connect.png")}
            />
          </View>
        </View>
      </Swiper>
      <View>
      <Button onPress={() => onDone(true)}
          title="START" 
        />
      </View>
    </View>
  );
};

var styles = {
  container: {
    flex: 1,
  },
  slide: {
    height: "100%",
    width: "100%",
  },
};
