import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";

// Assets
import { Colors, Metrics } from "./assets/Themes";
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

// Browse Screen Stack
const BrowseStack = createStackNavigator();
function BrowseStackComponent() {
  return (
    <BrowseStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background1,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        shadowColor: "transparent",
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <BrowseStack.Screen
        name="Explore"
        component={Browse}
        options={{
          headerRight: () => (
            // TODO: Create custom filter component
            <Button
              onPress={() => alert("This is a button!")}
              title="Filter"
              color={Colors.white}
            />
          ),
        }}
      />
    </BrowseStack.Navigator>
  );
}

// Saved Screen Stack
const SavedStack = createStackNavigator();
function SavedStackComponent() {
  return (
    <SavedStack.Navigator
      headerMode="float"
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background1,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        shadowColor: "transparent",
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <SavedStack.Screen name="Saved" component={Saved} />
    </SavedStack.Navigator>
  );
}

// Upload Screen Stack
const UploadStack = createStackNavigator();
function UploadStackComponent() {
  return (
    <UploadStack.Navigator
      headerMode="float"
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background1,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        shadowColor: "transparent",
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <UploadStack.Screen name="Upload" component={Upload} />
    </UploadStack.Navigator>
  );
}

// Notification Screen Stack
const NotificationStack = createStackNavigator();
function NotificationStackComponent() {
  return (
    <NotificationStack.Navigator
      headerMode="float"
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background1,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        shadowColor: "transparent",
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <NotificationStack.Screen
        name="Notifications"
        component={Notifications}
      />
    </NotificationStack.Navigator>
  );
}

// Profile Screen Stack
const ProfileStack = createStackNavigator();
function ProfileStackComponent() {
  return (
    <ProfileStack.Navigator
      headerMode="float"
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background1,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        shadowColor: "transparent",
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "@arianaventi" }}
      />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  const [appLoading, setAppLoading] = useState(false);

  // Asynchronously load the custom fonts icons from icomoon
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

  const Tab = createBottomTabNavigator();

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
                  case "BrowseTab":
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
                  case "SavedTab":
                    icon = focused ? (
                      <CustomIcons name="bookmark" color={color} size={size} />
                    ) : (
                      <CustomIcons name="bookmark" color={color} size={size} />
                    );
                    break;
                  case "UploadTab":
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
                  case "NotificationsTab":
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
                  case "ProfileTab":
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
            <Tab.Screen name="BrowseTab" component={BrowseStackComponent} />
            <Tab.Screen name="SavedTab" component={SavedStackComponent} />
            <Tab.Screen name="UploadTab" component={UploadStackComponent} />
            <Tab.Screen
              name="NotificationsTab"
              component={NotificationStackComponent}
            />
            <Tab.Screen name="ProfileTab" component={ProfileStackComponent} />
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
