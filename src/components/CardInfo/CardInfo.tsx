import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "../Card";
import { Error } from "../Error/Error";
import { Loader } from "../Loader/Loader";
interface Props {
  id: number;
}
export const CardInfo = ({ id }: Props) => {
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
          <Card.Image uri={characterInfo.image}></Card.Image>
          <Card.Name name={characterInfo.name}></Card.Name>
          <Card.Details id={id}></Card.Details>
        </Card>
      )}
    </>
  );
};
