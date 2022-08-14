import React from "react";
import { View, Text } from "react-native";

export const Specie = ({ specie }: { specie: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Specie: </Text>
      <Text style={{ alignSelf: "center", fontSize: 20 }}>{specie}</Text>
    </View>
  );
};
