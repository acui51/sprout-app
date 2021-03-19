import React, { useState, useRef } from "react";
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  FlatList,
  Animated,
} from "react-native";

export default Onboarding = () => {
  const slides = [
    {
      id: "1",
      image: require("../assets/Images/onboarding/Discover.png"),
    },
    {
      id: "2",
      image: require("../assets/Images/onboarding/Discover.png"),
    },
    {
      id: "3",
      image: require("../assets/Images/onboarding/Discover.png"),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  //const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentageThreshold: 50 })
    .current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      sidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
      } catch (err) {
        console.log("Error @setItem: ", err);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image source={item.image} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
        />{" "}
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  slide: {
    height,
    width,
  },
});
