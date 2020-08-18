import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, images, SIZES, FONTS } from "../constants";

function Onboarding(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            alignItems: "center",
            marginHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
          <Text>
            Easy solution to buy tickets for your travel, business trips,
            transportation, lodging and culinary
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Onboarding;
