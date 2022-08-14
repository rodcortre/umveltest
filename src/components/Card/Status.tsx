import React from "react";
import { View, Text } from "react-native";

export const Status = ({ status }: { status: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Status: </Text>
      <Text style={{ alignSelf: "center", fontSize: 20 }}>{status}</Text>
    </View>
  );
};
