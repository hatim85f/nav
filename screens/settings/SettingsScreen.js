import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Link to={{ screen: "Feed" }}> Go to Feed </Link>
      <Link to={{ screen: "Settings" }}> Go to Settings </Link>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
