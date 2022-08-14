import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Back</Text>
      <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
    </TouchableWithoutFeedback>
  );
};
