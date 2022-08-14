import React from "react";
import { ActivityIndicator, Animated, View } from "react-native";
import { useAnimation } from "../../hooks/useAnimation";
interface Props {
  uri: string;
  height?: number;
}

export const FadeInImage = ({ uri, height = 200 }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = React.useState(true);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn(2000);
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color={"#5856D6"}
          size={30}
        ></ActivityIndicator>
      )}
      <Animated.Image
        source={{ uri }}
        onLoadEnd={() => finishLoading()}
        style={{
          width: "100%",
          height,
          opacity,
          borderRadius: 10,
        }}
      />
    </View>
  );
};
