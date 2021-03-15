import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  useLayoutEffect,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { FrontAwesome, Entypo } from "@expo/vector-icons";
// Assets
import { Images, Colors } from "../../../assets/Themes";

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
    paddingHorizontal: 0,
  },
  searchBarInputContainer: {
    backgroundColor: Colors.background2,
    borderRadius: 10,
    height: 48,
  },
});

export default function InboxPage({ navigation }) {
  const [text, setSearch] = useState("");
  return (
    <Container customStyle={styles.container}>
      {/* <FrontAwesome name="pen" size={24}></FrontAwesome> */}
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
      <TouchableOpacity onPress={() => navigation.navigate("Honest Chat", {userName: "Brunetted"})}>
          <UserCard
            username="brunetted"
            boldtext="Thank you for connecting..."
            text=" · 1h"
            pfp={Images.honest_ocean}
            notification
          ></UserCard>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("chat", {userName: "Scissors"})}>
          <UserCard
            username="Scissors"
            boldtext="Thanks for the feedback..."
            text=" · 1h"
            pfp={Images.scissors}
            notification
          ></UserCard>
        </TouchableOpacity>

        <UserCard
          username="Bessieb"
          text="Liked a message · 1d"
          pfp={Images.bessie_b}
        />
        <UserCard
          username="Justintimberpond"
          text="Love it · 1d"
          pfp={Images.justin_t}
        />
        <UserCard
          username="Shawnamendez"
          text="Gotchat, will try it out · 2d"
          pfp={Images.shawna_m}
        />
      </ScrollView>
    </Container>
  );
}
