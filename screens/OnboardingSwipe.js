import React from "react";
import {
  Image,
  View,
  StatusBar,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import Swiper from "react-native-swiper";
import { CustomButton } from "../components";
import { Colors } from "../assets/Themes";
import { Entypo } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default ({ onDone }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper
        loop={false}
        showsPagination={false}
        showsButtons={true}
        nextButton={
          <Entypo name="chevron-right" size={50} color={Colors.primary} />
        }
        prevButton={
          <Entypo name="chevron-left" size={50} color={Colors.primary} />
        }
      >
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
            <CustomButton
              variantButton="primaryShadow"
              variantText="whiteBaseText"
              text="START"
              customStyles={{
                position: "absolute",
                top: "30.90%",
                left: "33%",
              }}
              width={150}
              onPress={() => onDone(true)}
            />
          </View>
        </View>
      </Swiper>
      {/* <View>
        <Button onPress={() => onDone(true)} title="START" />
      </View> */}
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
