import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  Bubble,
  Send,
  InputToolbar,
  TextInput,
  GiftedChat,
} from "react-native-gifted-chat";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Assets
import { Metrics, Colors, Images } from "../../../assets/Themes";

// Components
import Container from "../../../hoc/Container";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
  },
  logo: {
    height: Metrics.icons.medium,
    resizeMode: "contain",
  },
});

export default ({ pfp, route }) => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        route.params && route.params.profile
          ? route.params.profile === "honest_ocean"
            ? "@brunetted"
            : `@${route.params.profile}`
          : "@arianaventi",
    });
  }, [navigation]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        user: {
          _id: 2,
          name: "React Native",
          avatar: { pfp },
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors.primary,
            marginTop: 10,
          },
          left: {
            backgroundColor: Colors.background2,
            marginTop: 10,
          },
        }}
        textStyle={{
          right: {
            color: Colors.white,
          },
          left: {
            color: Colors.white,
          },
        }}
      />
    );
  };
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{ paddingBottom: 8 }}>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginRight: 15 }}
            size={30}
            color={Colors.primary}
          />
        </View>
      </Send>
    );
  };
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: Colors.background2,
          borderTopWidth: 0,
          borderRadius: 20,
          paddingLeft: 10,
        }}
        textInputStyle={{ color: Colors.white }}
      />
    );
  };
  const scrollToBottomComponent = () => {
    return <FontAwesome5 name="chevron-down" size={22} color={Colors.black} />;
  };
  return (
    <Container customStyle={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </Container>
  );
};
