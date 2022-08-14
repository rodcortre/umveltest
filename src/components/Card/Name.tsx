import React from "react";
import { View, Text } from "react-native";

export const Name = ({ name }: { name: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Name: </Text>
      <Text style={{ alignSelf: "center", fontSize: 20 }}>{name}</Text>
    </View>
  );
};
