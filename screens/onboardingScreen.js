import React from "react";
import Image from "react-native";
import Onboarding from "react-native-onboarding-swiper";
// Assets
import  Metrics from "../assets/Themes";
const OnboardingScreen = () => {
  return (
     
    <Onboarding
      pages={[
        {
          image: (
            <Image
              style={{
                height: Metrics.screenHeight,
                width: Metrics.screenWidth,
              }}
              source={require("../assets/Images/onboarding/Discover.png")}
            />
          ),
        },
        {
          image: (
            <Image
              style={{
                height: Metrics.screenHeight,
                width: Metrics.screenWidth,
              }}
              source={require("../assets/Images/onboarding/Add.png")}
            />
          ),
        },
        {
          image: (
            <Image
              style={{
                height: Metrics.screenHeight,
                width: Metrics.screenWidth,
              }}
              source={require("../assets/Images/onboarding/Seed.png")}
            />
          ),
        },
        {
          image: (
            <Image
              style={{
                height: Metrics.screenHeight,
                width: Metrics.screenWidth,
              }}
              source={require("../assets/Images/onboarding/Evolve.png")}
            />
          ),
        },
      ]}
    />
 
  );
};

export default OnboardingScreen;
