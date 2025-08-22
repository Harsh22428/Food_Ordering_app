import { View, Text } from "react-native";
import { Link, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
    <SafeAreaView>
      <Slot/>
    </SafeAreaView>

  );
}
