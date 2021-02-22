import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";

// Assets
import { Colors, Metrics } from "./assets/Themes";
import CustomIcons from "./assets/Fonts";

// Components
import { Browse, Upload, Profile, Saved, Notifications } from "./screens";

const styles = StyleSheet.create({
  upload: {
    marginTop: 10,
    width: 60,
    height: undefined,
    aspectRatio: 1,
  },
});

// Tab navigator
export default Main = () => {
  const { colors } = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          switch (route.name) {
            case "Browse":
              icon = focused ? (
                <CustomIcons name="home-filled" color={color} size={size} />
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
                <CustomIcons name="notification" color={color} size={size} />
              ) : (
                <CustomIcons name="notification" color={color} size={size} />
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
          height: Metrics.tabBarHeight,
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
  );
};
