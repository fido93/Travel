import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/";
import { COLORS, icons } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
};

function tabs(props) {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;
          const borderBottom = focused ? styles.bottomColor : null;

          switch (route.name) {
            case "Home":
              return (
                <>
                  <View style={borderBottom}></View>
                  <TouchableOpacity>
                    <Image
                      source={icons.home}
                      resizeMode="contain"
                      style={{
                        tintColor: tintColor,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </TouchableOpacity>
                </>
              );
            case "Search":
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case "Bookmark":
              return (
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case "Account":
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Bookmark" component={Home} />
      <Tab.Screen name="Account" component={Home} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomColor: {
    backgroundColor: "orange",
    bottom: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: 5,
  },
});

export default tabs;
