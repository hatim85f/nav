import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuButton from "../../MainButton";
import { Link } from "@react-navigation/native";
import { Button } from "react-native-elements";

const ProfileScreen = (props) => {
  return (
    <View>
      <MenuButton navigation={props.navigation} />
      <Text style={{ fontSize: 25, textAlign: "center", color: "blue" }}>
        This is Profile Screen
      </Text>
      <Link to={{ screen: "Dashboard" }}> Go to Home </Link>
      <Link to={{ screen: "Feed" }}> Go to Feed </Link>
      <Link to={{ screen: "Settings" }}> Go to Settings </Link>
      <Link to={{ screen: "Intro" }}> Go to Settings </Link>
      <Button
        title="Open Drawer"
        onPress={() => props.navigation.openDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
