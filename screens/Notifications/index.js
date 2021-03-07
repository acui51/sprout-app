import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Metrics, Colors } from "../../assets/Themes";

// Components
import Container from "../../hoc/Container";
import { CustomText } from "../../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
  },
  logo: {
    height: Metrics.icons.medium,
    resizeMode: "contain",
  },
  featuredAllSwitch: {
    flexDirection: "row",
    marginBottom: 32,
  },
  featuredAllText: {
    fontSize: 20,
    fontWeight: "700",
  },
  contentWrap: {
    alignSelf: "baseline",
    paddingBottom: 4,
  },
});

export default () => {
  const { colors } = useTheme();
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
            <CustomText customStyles={styles.featuredAllText}>
              Featured
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
            <CustomText customStyles={styles.featuredAllText}>All</CustomText>
          </View>
        </TouchableOpacity>
      </View>

    </Container>
  );
};
