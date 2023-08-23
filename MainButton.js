import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const MenuButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.toggleDrawer()}
      style={[props.style, { cursor: "pointer" }]}
    >
      <Ionicons name="menu" size={55} color="#ff0055" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default MenuButton;
