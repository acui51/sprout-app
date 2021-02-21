import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

// Assets
import { Colors } from "./assets/Themes";
import CustomIcons from "./assets/Fonts";

// Components
import { Browse, Upload, Profile, Saved, Notifications } from "./screens";

// Use this to get colors from theme
// import { useTheme } from '@react-navigation/native';
// const { colors } = useTheme();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background1,
    text1: Colors.white,
    text2: Colors.gray,
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [appLoading, setAppLoading] = useState(false);

  // Asynchronously load the custom fonts from icomoon
  const loadResourcesAsync = async () =>
    Promise.all([
      Font.loadAsync({
        "custom-icons": require("./assets/Fonts/sprout-v2.ttf"),
      }),
    ]);

  // Handle error loading
  const handleLoadingError = (error) => {
    console.warn(error);
  };

  // Handle finish loading
  const handleFinishLoading = () => {
    setAppLoading(true);
  };

  if (!appLoading) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer theme={Theme}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let icon;
                switch (route.name) {
                  case "Browse":
                    icon = focused ? (
                      <CustomIcons
                        name="home-filled"
                        color={color}
                        size={size}
                      />
                    ) : (
                      <CustomIcons name="home" color={color} size={size} />
                    );
                    break;
                  case "Saved":
                    icon = focused ? (
                      <CustomIcons name="bookmark" color={color} size={size} />
                    ) : (
                      <CustomIcons name="bookmark" color={color} size={size} />
                    );
                    break;
                  case "Upload":
                    icon = focused ? (
                      <Image
                        source={require("./assets/Images/add.png")}
                        style={styles.upload}
                      />
                    ) : (
                      <Image
                        source={require("./assets/Images/add.png")}
                        style={styles.upload}
                      />
                    );
                    break;
                  case "Notifications":
                    icon = focused ? (
                      <CustomIcons
                        name="notification"
                        color={color}
                        size={size}
                      />
                    ) : (
                      <CustomIcons
                        name="notification"
                        color={color}
                        size={size}
                      />
                    );
                    break;
                  case "Profile":
                    icon = focused ? (
                      <CustomIcons name="user" color={color} size={size} />
                    ) : (
                      <CustomIcons name="user" color={color} size={size} />
                    );
                    break;
                  default:
                    null;
                }
                return icon;
              },
            })}
            tabBarOptions={{
              activeTintColor: Colors.white,
              inactiveTintColor: "gray",
              showLabel: false,
              style: {
                backgroundColor: Colors.blur,
                height: 55,
                borderTopWidth: 0,
              },
            }}
          >
            <Tab.Screen name="Browse" component={Browse} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Upload" component={Upload} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: Colors.background1,
  },
  bottomSafeArea: {
    flex: 1,
    borderRadius: 21,
    backgroundColor: Colors.background1,
  },
  upload: {
    marginTop: 10,
    width: 60,
    height: undefined,
    aspectRatio: 1,
  },
});
