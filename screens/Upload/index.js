import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Assets
import { Metrics } from "../../assets/Themes";
import { Colors } from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import Container from "../../hoc/Container";

export default function App() {
  const navigation = useNavigation();
  return (
    <Container>
      {/* <TouchableOpacity style = {styles.button}>
        <Image source={Images.record} />
        <CustomText style = {styles.whiteText}>Record</CustomText>
      </TouchableOpacity> */}
      <View style={styles.container}>
        <View style={styles.button}>
          <CustomButton
            text="Record"
            variantButton="primaryShadow"
            variantText="whiteText"
            width={165}
            onPress={() => navigation.navigate("Studio")}
          />
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Upload File"
            variantButton="primaryOutline"
            variantText="whiteText"
            width={165}
          ></CustomButton>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Metrics.marginHorizontal,
  },
  logo: {
    height: Metrics.icons.xl,
    resizeMode: "contain",
  },
  button: {
    padding: 10,
  },
  whiteText: {
    color: Colors.white,
  },
});
