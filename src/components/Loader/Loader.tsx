import React from "react";
import { View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        style={{ position: "absolute" }}
        color={"#5856D6"}
        size={30}
      ></ActivityIndicator>
    </View>
  );
};
