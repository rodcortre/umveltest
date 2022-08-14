import React, { ReactElement } from "react";
import { View } from "react-native";
export interface Props {
  children?: ReactElement<any> | ReactElement<any>[];
}
export const Card = ({ children }: Props) => {
  return (
    <View
      style={{
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
      }}
    >
      {children}
    </View>
  );
};
