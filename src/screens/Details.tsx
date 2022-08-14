import React, { useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";

import { Dimensions } from "react-native";
import { Card } from "../components/Card";
import { Error } from "../components/Error/Error";
import { Loader } from "../components/Loader/Loader";
import { useFetch } from "../hooks/useFetch";
type ParamList = {
  Params: {
    id: string;
  };
};
const { height } = Dimensions.get("screen");
export const Details = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, "Params">>();
  const [characterInfo, setCharacterInfo] = useState<any>();
  const { isError, isLoading, refetch, data } = useFetch();
  React.useEffect(() => {
    refetch(`https://rickandmortyapi.com/api/character/${id}`);
  }, []);
  React.useEffect(() => {
    if (data) {
      setCharacterInfo(data);
    }
  }, [data]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <Error></Error>;
  }
  return (
    <>
      {characterInfo && (
        <Card>
          <Card.Image
            uri={characterInfo.image}
            height={height / 2}
          ></Card.Image>
          <Card.Name name={characterInfo.name} />
          <Card.Specie specie={characterInfo.species} />
          <Card.Status status={characterInfo.status} />
          <Card.Gender gender={characterInfo.gender} />
          <Card.Origin origin={characterInfo.origin.name} />
          <Card.Back />
        </Card>
      )}
    </>
  );
};
