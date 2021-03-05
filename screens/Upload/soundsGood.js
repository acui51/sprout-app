import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { useTheme } from "@react-navigation/native";

// Assets
import { Metrics, Images, Colors} from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";

export default function soundsGood({ navigation }) {

  return (
    <Container style={styles.container}>
      <CustomText customStyles={styles.title}>Sounds Good?</CustomText>
      <View>
        <Image source = {Images.sound_freq}/>
      </View>
      <View style={styles.button}>
        <CustomButton
          text="YES! CONTINUE"
          variantButton="primaryShadow"
          variantText="whiteText"
          width={196}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.marginHorizontal,
  },
  title: {
    fontSize:45,
    color: Colors.white,
    paddingTop: 40,
    paddingBottom: 100,
  },
  button: {
    padding: 10,
  },
  
});