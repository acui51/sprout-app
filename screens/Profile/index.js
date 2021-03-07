import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

// Assets + DATA
import { Metrics, Colors, Images } from "../../assets/Themes";

// Components
import { Bubble, CustomText } from "../../components";
import Container from "../../hoc/Container";
import { ProfileCard } from "./components";

export default () => {
  const [view, setView] = useState("featured");

  return (
    <Container customStyles={styles.container}>
      {/* Profile Card at Top */}
      <ProfileCard
        name="Ariana Venti"
        bio="I love pizza almost as much as making music 👌"
        buttonText="Edit Profile"
        customStyles={styles.profileCard}
      />

      {/* Featured All Switcher */}
      <View style={styles.featuredAllSwitch}>
        <TouchableOpacity
          style={{ marginHorizontal: 40 }}
          onPress={() => setView("featured")}
        >
          <View
            style={[
              styles.contentWrap,
              view === "featured" && {
                borderBottomColor: Colors.white,
                borderBottomWidth: 2,
              },
            ]}
          >
            <CustomText
              customStyles={[
                styles.featuredAllText,
                { fontFamily: "Kollektif-Bold" },
                view === "all" && { color: Colors.gray },
              ]}
            >
              Featured
            </CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginHorizontal: 40 }}
          onPress={() => setView("all")}
        >
          <View
            style={[
              styles.contentWrap,
              view === "all" && {
                borderBottomColor: Colors.white,
                borderBottomWidth: 2,
              },
            ]}
          >
            <CustomText
              customStyles={[
                styles.featuredAllText,
                { fontFamily: "Kollektif-Bold" },
                view === "featured" && { color: Colors.gray },
              ]}
            >
              All
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>

      {/* User's Soundbubbles */}
      {view === "featured" ? (
        <Bubble genre="edm" img={Images.sb_tameImpala} />
      ) : (
        <Bubble genre="pop" img={Images.sb_candy} />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    height: Metrics.icons.xl,
    resizeMode: "contain",
  },
  profileCard: {
    marginBottom: 40,
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
