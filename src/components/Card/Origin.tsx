import React from "react";
import { View, Text } from "react-native";

export const Origin = ({ origin }: { origin: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Origin: </Text>
      <Text style={{ alignSelf: "center", fontSize: 20 }}>{origin}</Text>
    </View>
  );
};
