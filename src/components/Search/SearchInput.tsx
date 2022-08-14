import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, View } from "react-native";
import stylesSearchInput from "./styles";
interface Props {
  setValueToSearch: Function;
  valueToSearch: string;
}
export const SearchInput = ({ valueToSearch, setValueToSearch }: Props) => {
  const handleSearch = (e: string) => {
    setValueToSearch(e);
  };
  return (
    <View style={stylesSearchInput.container}>
      <View style={{ flex: 1 }}></View>

      <View style={stylesSearchInput.area}>
        <TextInput
          value={valueToSearch}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
          style={stylesSearchInput.input}
        />
        <Ionicons
          name="search"
          size={32}
          color="grey"
          style={{ position: "relative", left: -30 }}
        />
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
