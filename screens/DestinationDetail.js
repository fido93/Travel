import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, images, SIZES, FONTS, icons } from "../constants";

function StarReview({ rate }) {
  var starComponents = [];
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;

  // Full Star
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{
          height: 20,
          width: 20,
        }}
      />
    );
  }

  // Half Star
  for (var i = 0; i < halfStar; i++) {
    starComponents.push(
      <Image
        key={`half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{
          height: 20,
          width: 20,
        }}
      />
    );
  }

  // No Star
  for (var i = 0; i < noStar; i++) {
    starComponents.push(
      <Image
        key={`empty-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{
          height: 20,
          width: 20,
        }}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {starComponents}
      <Text
        style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {rate}
      </Text>
    </View>
  );
}

function DestinationDetail({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 2 }}>
        <Image
          source={images.skiVillaBanner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "80%",
          }}
        />
        <View
          style={[
            {
              position: "absolute",
              bottom: "5%",
              left: "5%",
              right: "5%",
              borderRadius: 15,
              padding: SIZES.padding,
              backgroundColor: COLORS.white,
            },
            styles.shadow,
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                source={images.skiVilla}
                resizeMode="cover"
                style={{ width: 70, height: 70, borderRadius: 15 }}
              />
            </View>
            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...FONTS.h3 }}>Ski Villa</Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>France</Text>
              <StarReview rate={1.5} />
            </View>
          </View>

          <View style={{ marginTop: SIZES.padding }}>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Ski is fun they offers a simple rooms with mountain views in front
              of the ski lift to the Ski Resort
            </Text>
          </View>
        </View>
        {/* Header buttons */}
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Image
                source={icons.back}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => console.log("press")}>
              <Image
                source={icons.menu}
                resizeMode="cover"
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Body */}
      <View style={{ flex: 1.5 }}></View>
      {/* Footer */}
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DestinationDetail;
