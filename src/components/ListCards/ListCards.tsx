import React from "react";
import { View, FlatList } from "react-native";
import { CardInfo } from "../CardInfo/CardInfo";

const returnItem = (item: number) => {
  return <CardInfo id={item} />;
};
export const ListAllCards = () => {
  const [numbers, setNumbers] = React.useState<number[]>([1, 2, 3, 4, 5, 6]);
  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i + 1;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  return (
    <View style={{ flex: 1, marginTop: 5 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => returnItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      ></FlatList>
    </View>
  );
};
