import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const Details = ({ id }: { id: number }) => {
  const navigation: any = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Details", {
          id,
        });
      }}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>View details</Text>
      <Ionicons name="arrow-forward-circle-sharp" size={40} color="black" />
    </TouchableWithoutFeedback>
  );
};
