import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuButton from "../../MainButton";
import { Link } from "@react-navigation/native";

const ProfileScreen = (props) => {
  return (
    <View>
      <MenuButton navigation={props.navigation} />
      <Text>ProfileScreen</Text>
      <Link to={{ screen: "home" }}> Go to Home </Link>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
