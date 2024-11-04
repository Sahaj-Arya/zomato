import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ScreenStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          animation: "default",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </Stack>
  );
};

export default ScreenStack;

const styles = StyleSheet.create({});
