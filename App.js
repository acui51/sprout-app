import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

// Assets
import { Colors } from "./assets/Themes";

// Components
import { Main } from "./screens";

// const Main = () => {
//   return (
//     <SafeAreaView>
//       <Text>Hi</Text>
//     </SafeAreaView>
//   );
// };

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

const Stack = createStackNavigator();

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

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer theme={Theme}>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
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
});
