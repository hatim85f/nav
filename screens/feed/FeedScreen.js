import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

const FeedScreen = () => {
  return (
    <View>
      <Text>FeedScreen</Text>
      <Link to={{ screen: "Profile" }}> Go to Feed </Link>
      <Link to={{ screen: "Settings" }}> Go to Settings </Link>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
