import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MyStack } from "./src/router";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
