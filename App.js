import React, { useState, Component } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Assets
import { Colors, Metrics, Images } from "./assets/Themes";
import CustomIcons from "./assets/Fonts";

// Components
import { Browse, Profile, Network, Notifications } from "./screens";

//import screens
import Upload from "./screens/Upload/index";
import Studio from "./screens/Upload/studio";
import SoundsGood from "./screens/Upload/soundsGood";
import CoverPhoto from "./screens/Upload/CoverPhoto";
import InboxPage from "./screens/Profile/components/InboxPage";
import NewMessagePage from "./screens/Profile/components/newMessagePage";
import ChatPage from "./screens/Profile/components/chatPage";
import OtherProfile from "./screens/Profile/components/otherProfile";
import SoundEvolution from "./screens/SoundEvolution/";
import HonestChat from "./screens/Network/honestChat";

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
          fontFamily: "Kollektif-Bold",
          fontSize: 24,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.white} />
          </View>
        ),
      }}
    >
      <BrowseStack.Screen name="Explore" component={Browse} />
      <BrowseStack.Screen name="SoundbitePopup" component={Upload} />
      <BrowseStack.Screen name="Studio" component={Studio} />
      <BrowseStack.Screen name="Sounds Good" component={SoundsGood} />
      <BrowseStack.Screen name="Upload a Cover Photo" component={CoverPhoto} />
      <BrowseStack.Screen name="Profile" component={Profile} />
      <BrowseStack.Screen name="Sound Evolution" component={SoundEvolution} />
    </BrowseStack.Navigator>
  );
}

// Network Screen Stack
const NetworkStack = createStackNavigator();
function NetworkStackComponent() {
  return (
    <NetworkStack.Navigator
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
          fontFamily: "Kollektif-Bold",
          fontSize: 24,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.white} />
          </View>
        ),
      }}
    >
      <NetworkStack.Screen
        name="My Network"
        component={Network}
        options={({ navigation }) => ({
          myself: "yes",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={Colors.white} />
            </View>
          ),
        })}
      />
      <BrowseStack.Screen name="Profile" component={Profile} />
    </NetworkStack.Navigator>
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
          fontFamily: "Kollektif-Bold",
          fontSize: 24,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.white} />
          </View>
        ),
      }}
    >
      <UploadStack.Screen name="Upload" component={Upload} />
      <UploadStack.Screen name="Studio" component={Studio} />
      <UploadStack.Screen name="Sounds Good" component={SoundsGood} />
      <UploadStack.Screen name="Upload a Cover Photo" component={CoverPhoto} />
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
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.white} />
          </View>
        ),
        headerStyle: {
          backgroundColor: Colors.background1,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        shadowColor: "transparent",
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontFamily: "Kollektif-Bold",
          fontSize: 24,
        },
      }}
    >
      <NotificationStack.Screen
        name="Notifications"
        component={Notifications}
      />
      <NotificationStack.Screen
        name="Honest Profile"
        component={OtherProfile}
        options={{
          title: "@brunetted",
        }}
      />
      <NotificationStack.Screen
        name="Honest Chat"
        component={HonestChat}
        options={{
          title: "@brunetted",
        }}
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
          fontSize: 24,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.white} />
          </View>
        ),
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "@arianaventi" }}
      />
      <ProfileStack.Screen
        name="My Network"
        component={Network}
        options={({ route, navigation }) => ({
          title: route.params.user,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={Colors.white} />
            </View>
          ),
          // headerRight: () => (
          //   <Ionicons
          //     name="chatbubble-ellipses-outline"
          //     size={32}
          //     color={Colors.white}
          //     style={{ marginRight: Metrics.headerMarginHorizontal }}
          //     onPress={() => navigation.navigate("My Inbox")}
          //   />
          // ),
        })}
      />
      <ProfileStack.Screen name="New Message" component={NewMessagePage} />
      <ProfileStack.Screen
        name="My Inbox"
        component={InboxPage}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerRight: () => (
            <FontAwesome
              name="pencil-square-o"
              size={32}
              color={Colors.white}
              style={{ marginRight: Metrics.headerMarginHorizontal }}
              onPress={() => navigation.navigate("New Message")}
            />
          ),
        })}
      />
      <ProfileStack.Screen
        name="chat"
        component={ChatPage}
        options={({ route }) => ({
          title: route.params.userName,
        })}
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
        Kollektif: require("./assets/Fonts/Kollektif.ttf"),
        "Kollektif-Bold": require("./assets/Fonts/Kollektif-Bold.ttf"),
        "Kollektif-Italic": require("./assets/Fonts/Kollektif-Italic.ttf"),
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
                  case "NetworkTab":
                    icon = focused ? (
                      // <CustomIcons name="bookmark" color={color} size={size} />
                      <Ionicons
                        name="people-outline"
                        size={size}
                        color={color}
                      />
                    ) : (
                      // <CustomIcons name="bookmark" color={color} size={size} />
                      <Ionicons
                        name="people-outline"
                        size={size}
                        color={color}
                      />
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
                      <View style={styles.iconContainer}>
                        <Image
                          style={styles.pfp}
                          source={Images.ariana_venti}
                        />
                        {/* <CustomText customStyle={{ fontSize: 10 }}>
                          Profile
                        </CustomText> */}
                      </View>
                    ) : (
                      <View style={styles.iconContainer}>
                        <Image
                          style={styles.pfp}
                          source={Images.ariana_venti}
                        />
                        {/* <CustomText customStyle={{ fontSize: 10 }}>
                          Profile
                        </CustomText> */}
                      </View>
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
            <Tab.Screen name="NetworkTab" component={NetworkStackComponent} />
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
    width: 75,
    height: undefined,
    aspectRatio: 1,
  },
  backButton: {
    borderColor: Colors.background2,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Metrics.headerMarginHorizontal,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  pfp: {
    width: 30,
    height: 30,
    marginBottom: 8,
  },
});
