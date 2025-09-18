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
import CartProvider from "@/providers/CartProvider";
export default function RootLayout() {
  useFrameworkReady();
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <CartProvider>
        <Stack initialRouteName="index">
          {/* this property initialRouteName render the first screen which is index */}
          <Stack.Screen name="(user)" options={{ headerShown: false }} />
          <Stack.Screen name="(admin)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="cart"
            options={{ presentation: "modal" }}
          />
        </Stack>
      </CartProvider>
    </ThemeProvider>
  );
}
