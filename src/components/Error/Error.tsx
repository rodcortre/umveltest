import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Error = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="alert-circle" size={50} color="red" />
      <Text>Not found</Text>
    </View>
  );
};
