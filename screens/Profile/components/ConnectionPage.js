import React, { useState } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
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
    marginBottom: 10,
  },
  searchBarInputContainer: {
    backgroundColor: Colors.background2,
    borderRadius: 10,
    height: 48,
    width: 327,
  },
  suggest: {
    fontSize: 10,
    fontWeight: "bold",
    color: Colors.gray,
    marginBottom: 16,
    borderBottomWidth: 20,
    borderBottomColor: Colors.gray,
  },
});

export default function ConnectionPage({ navigation }) {
  const [text, setSearch] = useState("");

  return (
    <Container customStyle={styles.container}>
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        placeholderTextColor={Colors.white}
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
      <CustomText customStyles={styles.suggest}>SUGGESTED</CustomText>
      <ScrollView>
        <UserCard username="scissors" text="Sissors" pfp={Images.scissors} />
        <UserCard username="bessieb" text="Bessie b" pfp={Images.bessie_b} />
        <UserCard
          username="justintimberpond"
          text="Justin Timberpound"
          pfp={Images.justin_t}
        />
        <UserCard
          username="shawnamendez"
          text="Shawna Mendez"
          pfp={Images.shawna_m}
        />
        <UserCard
          username="taylorfast"
          text="Taylor Fast"
          pfp={Images.taylor_f}
        />
      </ScrollView>
    </Container>
  );
}
