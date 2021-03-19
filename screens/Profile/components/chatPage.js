import React, { useState, useCallback, useEffect } from "react";
import {
  Bubble,
  Send,
  InputToolbar,
  TextInput,
  GiftedChat,
  Composer,
} from "react-native-gifted-chat";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";

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

export default ({ route }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Thanks for the feedback! I was super inspired by Monsters.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: Images.scissors,
        },
      },
      {
        _id: 2,
        text: "Love your new sound 🔥",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: Images.scissors,
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
        //placeholder={"Write a message"}
        containerStyle={{
          backgroundColor: Colors.background2,
          borderTopWidth: 0,
          borderRadius: 20,
          paddingLeft: 10,
        }}
        textInputStyle={{ color: "white" }}
        // renderComposer={(props1) => (
        //   <Composer textInputStyle={{ color: "white" }} />
        // )}
      />
    );
  };
  // // suppose to change the keyboard text color but is not working
  // const renderComposer = (props) => {
  //   return (
  //     <TextInput
  //       //placeholderTextColor="rgba(67,88,101,0.4)"
  //       value={props.text}
  //       multiline={true}
  //       style={{
  //         maxHeight: 100,
  //         height: Math.max(40, props.composerHeight),
  //         color: Colors.white,
  //         padding: 5,
  //       }}
  //     />
  //   );
  // };

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
        //renderComposer={renderComposer}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </Container>
  );
};
