import React, { useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
// Assets
import { Images, Colors } from "../../../assets/Themes";

// Components
import { CustomText } from "../../../components";
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
    paddingHorizontal: 0,
  },
  searchBarInputContainer: {
    backgroundColor: Colors.background2,
    borderRadius: 10,
    height: 48,
  },
  subheading: {
    fontSize: 10,
    fontWeight: "bold",
    color: Colors.gray,
    marginBottom: 20,
    marginTop: 5,
  },
  line: {
    borderBottomColor: Colors.background2,
    borderBottomWidth: 1,
    marginBottom: 12,
  },
});

export default function ConnectionPage({ navigation }) {
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
      <UserCard
        username="Connection Requests"
        text="brunetted and 2 others"
        pfp={Images.honest_ocean}
        request
      />
      <CustomText customStyles={styles.subheading}>
        MOST INTERACTED WITH
      </CustomText>
      <View style={styles.line}></View>
      <ScrollView>
        <UserCard username="scissors" text="Sissors" pfp={Images.scissors} />
        <UserCard username="bessieb" text="Bessie b" pfp={Images.bessie_b} />
        <UserCard
          username="justintimberpond"
          text="Justin Timberpound"
          pfp={Images.justin_t}
        />
        <CustomText customStyles={styles.subheading}>
          ALL CONNECTIONS
        </CustomText>
        <View style={styles.line}></View>
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
