import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../../hoc/Container";
import { ConnectionNotificationCard } from "../../Notifications/components";
import { useNavigation } from "@react-navigation/native";

const Connections = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Connection Requests",
    });
  });
  return (
    <Container>
      <ConnectionNotificationCard></ConnectionNotificationCard>
    </Container>
  );
};

export default Connections;

const styles = StyleSheet.create({});
