import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as Font from "expo-font";

// Screens
import { Onboarding, DestinationDetail } from "./screens/";
import { COLORS, SIZES, icons, FONTS } from "./constants";
import { AppLoading } from "expo";

// Tabs
import Tabs from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

// Fetching custom font by hooks
function fetchFonts() {
  return Font.loadAsync({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
}

const Stack = createStackNavigator();

export default function App() {
  // Calling font by hooks
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={"Onboarding"}>
        {/* Screens */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: { backgroundColor: COLORS.white },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("pressed")}
              >
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetail}
          options={{ headerShown: false }}
        />
        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("Menu")}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
