import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

const IntroScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>IntroScreen</Text>
      <Link to={{ screen: "Home" }}> Go to Home </Link>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
