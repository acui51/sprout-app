import React, { useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
// Assets
import { Metrics, Images, Colors } from "../../../assets/Themes";

// Components
import { CustomText, CustomButton } from "../../../components";
import Container from "../../../hoc/Container";
import UserCard from "../components/UserCard/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  searchBarContainer: {
    backgroundColor: Colors.background1,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginBottom: 40,
  },
  searchBarInputContainer: {
    backgroundColor: Colors.background2,
    borderRadius: 10,
    height: 48,
    //width: 327,
  },
  circle: {
    backgroundColor: Colors.primary,
    width: 22,
    height: 12,
    borderRadius: 20,
  },
});

export default function InboxPage({ navigation }) {
  const [text, setSearch] = useState("");

  return (
    <Container customStyle={styles.container}>
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        placeholderTextColor={Colors.gray}
        inputStyle={{ fontSize: 14, fontWeight: "bold" }}
        searchIcon={() => (
          <Image
            source={Images.search_icon}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        )}
        placeholder="Search"
        onChangeText={(text) => setSearch(text)}
        //value={search}
      />
      <ScrollView>
        <UserCard
          username="scissors"
          boldtext="Thanks for the feedback..."
          text=" · 1h"
          pfp={Images.scissors}
        >
          {/* <View style={styles.circle}></View> */}
          <Entypo name="check" size={24} color={Colors.primary} />
        </UserCard>
        <UserCard
          username="bessieb"
          text="Liked a message · 1d"
          pfp={Images.bessie_b}
        />
        <UserCard
          username="justintimberpond"
          text="Love it · 1d"
          pfp={Images.justin_t}
        />
        <UserCard
          username="shawnamendez"
          text="Gotchat, will try it out · 2d"
          pfp={Images.shawna_m}
        />
      </ScrollView>
    </Container>
  );
}
