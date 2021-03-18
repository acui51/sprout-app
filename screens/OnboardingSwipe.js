import React from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import CustomButton from "../components";
export default () => {
  return (
    <Swiper loop={false}>
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
  );
};

var styles = {
  slide: {
    height: "100%",
    width: "100%",
  },
};
