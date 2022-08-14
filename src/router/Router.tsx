import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
const Stack = createStackNavigator();
export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
