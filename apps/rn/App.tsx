import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-200 px-8">
      <Text className="text-2xl text-center text-blue-700">
        The view is bg-red-200 and text is text-blue-700
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
