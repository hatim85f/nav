import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuButton from "../../MainButton";
import { Link } from "@react-navigation/native";

const HomeScreen = (props) => {
  return (
    <View>
      <MenuButton navigation={props.navigation} />
      <Text>This is Home Screen</Text>
      <Link to={{ screen: "profile" }}> Go to Profile </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
