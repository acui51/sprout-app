import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

// Assets
import { Metrics, Colors } from "../../assets/Themes";

// Components
import Container from "../../hoc/Container";
import { CustomText } from "../../components";
import {
  SoundNotificationCard,
  ConnectionNotificationCard,
} from "./components";

// import { SoundNotificationCard } from "./components/SoundNotificationCard";
// import { ConnectionNotificationCard } from "./components/";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: Metrics.icons.medium,
    resizeMode: "contain",
  },
  featuredAllSwitch: {
    flexDirection: "row",
    marginBottom: 32,
    justifyContent: "center",
  },
  featuredAllText: {
    fontSize: 20,
    fontWeight: "700",
  },
  contentWrap: {
    alignSelf: "baseline",
    paddingBottom: 4,
  },
  notificationBox: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 20,
    height: 77,
    width: 315,
  },
  username: {
    color: Colors.black,
    flex: 1,
    flexWrap: "wrap",
  },
  notificationText: {
    color: Colors.black,
    flex: 1,
    flexWrap: "wrap",
  },
  notificationTime: {
    color: Colors.gray,
  },
  addButton: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  checkButton: {
    backgroundColor: Colors.white,
    color: Colors.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ({navigation}) => {
  const [view, setView] = useState("sounds");
  return (
    <Container customStyles={styles.container}>
      <View style={styles.featuredAllSwitch}>
        <TouchableOpacity
          style={{ marginHorizontal: 40 }}
          onPress={() => setView("sounds")}
        >
          <View
            style={[
              styles.contentWrap,
              view === "sounds" && {
                borderBottomColor: Colors.white,
                borderBottomWidth: 2,
              },
            ]}
          >
            <CustomText
              customStyles={[
                styles.featuredAllText,
                view === "connections" && { color: Colors.gray },
              ]}
            >
              Sounds
            </CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginHorizontal: 40 }}
          onPress={() => setView("connections")}
        >
          <View
            style={[
              styles.contentWrap,
              view === "connections" && {
                borderBottomColor: Colors.white,
                borderBottomWidth: 2,
              },
            ]}
          >
            <CustomText
              customStyles={[
                styles.featuredAllText,
                view === "sounds" && { color: Colors.gray },
              ]}
            >
              Connections
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>
      {/* Sound notifications */}
      {view === "sounds" ? (
        <SoundNotificationCard></SoundNotificationCard>
      ) : (
        // Connection notifications
        <TouchableOpacity onPress={() => navigation.navigate("Honest Profile")}>
          <ConnectionNotificationCard></ConnectionNotificationCard>
        </TouchableOpacity>
      )}
    </Container>
  );
};
