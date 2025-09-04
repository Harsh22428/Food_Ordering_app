import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import { useFrameworkReady } from "@/hooks/useFrameworkReady";
import { useColorScheme } from "@/hooks/useColorScheme";
export default function RootLayout() {
  useFrameworkReady();
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}
