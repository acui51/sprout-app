import React, { useState, useCallback, useEffect } from "react";
import {
  Bubble,
  Send,
  InputToolbar,
  TextInput,
  GiftedChat,
} from "react-native-gifted-chat";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from '@expo/vector-icons';

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

export default () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Thank you for connecting!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: Images.honest_ocean,
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
      />
    );
  };
  const scrollToBottomComponent = () => {
    return(
        <FontAwesome5 name="chevron-down" size={22} color={Colors.black}/>
    );
  }
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
