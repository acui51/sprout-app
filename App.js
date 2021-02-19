import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./assets/Themes";

// Assets

// Components
import { Browse, Upload, Profile } from "./screens";

// Use this to get colors from theme
// import { useTheme } from '@react-navigation/native';
// const { colors } = useTheme();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background1,
    text: Colors.white,
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer theme={Theme}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Browse") {
                  iconName = focused ? "ios-home" : "ios-home-outline";
                } else if (route.name === "Upload") {
                  iconName = focused
                    ? "ios-add-circle"
                    : "ios-add-circle-outline";
                } else if (route.name === "Profile") {
                  iconName = focused
                    ? "person-circle"
                    : "person-circle-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "purple",
              inactiveTintColor: "gray",
              showLabel: false,
              style: {
                backgroundColor: Colors.blur,
              },
            }}
          >
            <Tab.Screen name="Browse" component={Browse} />
            <Tab.Screen name="Upload" component={Upload} />
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
    backgroundColor: Colors.background1,
  },
});
