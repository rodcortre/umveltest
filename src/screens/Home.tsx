import React, { useState } from "react";
import { View } from "react-native";
import { ListCards } from "../components/ListCards/";
import { SearchInput } from "../components/Search/SearchInput";

export const Home = () => {
  const [valueToSearch, setValueToSearch] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <SearchInput
        valueToSearch={valueToSearch}
        setValueToSearch={setValueToSearch}
      ></SearchInput>
      <ListCards valueToSearch={valueToSearch}></ListCards>
    </View>
  );
};
