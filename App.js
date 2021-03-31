import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import styled, { ThemeProvider } from "styled-components/native";
import { StatusBar, Text } from "react-native";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utils/SafeArea.component";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/locations.context";
import { Navigation } from "./src/infrastructure/navigation";

const paperTheme = {
  ...DefaultTheme,
};

const MapScreen = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TABICONS = {
  Home: "restaurant",
  Settings: "settings",
  Map: "map",
};

export default function App() {
  let [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  let [latoLoaded] = useFontsLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
      </PaperProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
