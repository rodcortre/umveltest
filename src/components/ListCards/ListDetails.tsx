import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "../Card";
import { Error } from "../Error/Error";
import { Loader } from "../Loader/Loader";
interface Props {
  valueToSearch: string;
}
interface Item {
  image: string;
  name: string;
  id: number;
}
const returnItem = (item: Item) => {
  return (
    <Card>
      <Card.Image uri={item.image}></Card.Image>
      <Card.Name name={item.name}></Card.Name>
      <Card.Details id={item.id}></Card.Details>
    </Card>
  );
};
export const ListDetails = ({ valueToSearch }: Props) => {
  const [characterInfo, setCharacterInfo] = useState<any>();
  const { isError, isLoading, refetch, data } = useFetch();
  React.useEffect(() => {
    refetch(`https://rickandmortyapi.com/api/character/?name=${valueToSearch}`);
  }, [valueToSearch]);
  React.useEffect(() => {
    if (data) {
      setCharacterInfo(data.results);
    }
  }, [data]);
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <Error></Error>;
  }
  return (
    <View style={{ flex: 1, marginTop: 5 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={characterInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => returnItem(item)}
      ></FlatList>
    </View>
  );
};
