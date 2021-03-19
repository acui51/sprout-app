import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
      {searchText === ("Honest Ocean" || "brunetted" || "Brunetted") && (
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
      )}
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
});
