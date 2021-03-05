import React from "react";
import { StyleSheet, Image, View } from "react-native";

// Assets
import { Metrics, Images} from "../../assets/Themes";

// Components
import { CustomButton, CustomText } from "../../components";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Container from "../../hoc/Container";

export default function studio({ navigation }) {

  return (
    <Container style={styles.container}>
      <CustomText customStyles={styles.title}>Ariana Venti’s studio</CustomText>
      <View style={styles.content}>
        <Image source = {Images.studio}/>
      </View>
      <View style={styles.content}>
        <View style={styles.button}>
          <CustomButton
            text="NEXT"
            variantButton="primaryShadow"
            variantText="whiteText"
            width={110}
            onPress={() => navigation.navigate('SoundsGood')}
          />
        </View>
        <View style={styles.button}>
        <CustomButton
            text="Go Back"
            variantButton="primaryShadow"
            variantText="whiteText"
            width={110}
            onPress={() => navigation.navigate('Upload')}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
  },
  title: {
    fontSize:45,
    color: Colors.white,
    paddingTop: 40,
    paddingBottom: 100,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
  },
});