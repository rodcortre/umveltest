import React from "react";
import { View } from "react-native";
import { ListAllCards } from "./ListCards";
import { ListDetails } from "./ListDetails";
interface Props {
  valueToSearch: string;
}

export const ListCards = ({ valueToSearch }: Props) => {
  return (
    <View style={{ flex: 1, marginTop: 5 }}>
      {valueToSearch.length ? (
        <ListDetails valueToSearch={valueToSearch}></ListDetails>
      ) : (
        <ListAllCards></ListAllCards>
      )}
    </View>
  );
};
