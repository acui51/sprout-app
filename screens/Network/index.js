import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
// Assets
import { Images, Colors } from "../../assets/Themes";

// Components
import { CustomText } from "../../components";
import Container from "../../hoc/Container";
import UserCard from "../Profile/components/UserCard";

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

export default ({ route }) => {
  const [text, setSearch] = useState("");
  const navigation = useNavigation();
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
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Connections")}>
          <UserCard
            username="Connection Requests"
            username2="honest_ocean"
            text="brunetted and 2 others"
            pfp={Images.honest_ocean}
            request
          />
        </TouchableOpacity>
        <CustomText customStyles={styles.subheading}>
          MOST INTERACTED WITH
        </CustomText>
      </View>
      <View style={styles.line}></View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.push("Profile", { profile: "scissors_s" })}
        >
          <UserCard
            username="scissors_s"
            username2="scissors_s"
            text="Scissors"
            pfp={Images.scissors}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push("Profile", { profile: "bessie_b" })}
        >
          <UserCard
            username="bessie_b"
            username2="bessie_b"
            text="Bessie b"
            pfp={Images.bessie_b}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push("Profile", { profile: "justin_t" })}
        >
          <UserCard
            username="justin_t"
            username2="justin_t"
            text="Justin Timberpound"
            pfp={Images.justin_t}
          />
        </TouchableOpacity>
        <CustomText customStyles={styles.subheading}>
          ALL CONNECTIONS
        </CustomText>
        <View style={styles.line}></View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push("Profile", { profile: "shawna_m" })}
          >
            <UserCard
              username="shawna_m"
              username2="shawna_m"
              text="Shawna Mendez"
              pfp={Images.shawna_m}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push("Profile", { profile: "taylor_f" })}
          >
            <UserCard
              username="taylor_f"
              username2="taylor_f"
              text="Taylor Fast"
              pfp={Images.taylor_f}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};
