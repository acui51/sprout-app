import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

// Assets + Data
import { Colors, Images } from "../../../assets/Themes";

// Components
import Container from "../../../hoc/Container";
import { CustomText } from "../../../components";
import UserCard from "../../Profile/components/UserCard";

const SearchUsers = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const searchRef = useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <Container>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}
      >
        <View style={styles.searchWrapper}>
          <Feather
            style={{ marginRight: 8 }}
            name="search"
            size={24}
            color={Colors.white}
            onPress={() =>
              navigation.navigate("Profile", { profile: "honest_ocean" })
            }
          />
          <TextInput
            ref={searchRef}
            style={styles.searchText}
            placeholder="Search for users"
            placeholderTextColor={Colors.gray}
            defaultValue={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            width: "20%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomText
              customStyles={{
                color: Colors.gray,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Cancel
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {searchText === ("Honest Ocean" || "brunetted" || "Brunetted") ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", { profile: "honest_ocean" })
            }
          >
            <UserCard
              username="brunetted"
              username2="honest_ocean"
              text="Honest Ocean"
              pfp={Images.honest_ocean}
            />
          </TouchableOpacity>
        ) : (
          <>
            <CustomText customStyles={styles.subheading}>RECENT</CustomText>
            <View style={styles.line}></View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("Profile", { profile: "scissors_s" })
              }
            >
              <UserCard
                username="scissors_s"
                username2="scissors_s"
                text="Scissors"
                pfp={Images.scissors}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.push("Profile", { profile: "bessie_b" })
              }
            >
              <UserCard
                username="bessie_b"
                username2="bessie_b"
                text="Bessie b"
                pfp={Images.bessie_b}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.push("Profile", { profile: "justin_t" })
              }
            >
              <UserCard
                username="justin_t"
                username2="justin_t"
                text="Justin Timberpound"
                pfp={Images.justin_t}
              />
            </TouchableOpacity>
            <CustomText customStyles={styles.subheading}>RECENT</CustomText>
            <View style={styles.line}></View>
            <UserCard
              username="dj_cobra"
              username2="dj_cobra"
              text="DJ Cobra"
              pfp={Images.dj_cobra}
            />
          </>
        )}
      </ScrollView>
    </Container>
  );
};

export default SearchUsers;

const styles = StyleSheet.create({
  searchWrapper: {
    borderRadius: 12,
    backgroundColor: Colors.background2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  searchText: {
    color: Colors.white,
    fontSize: 14,
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
