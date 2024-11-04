import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import { Colors } from "@/utils/Constants";
import Animated, { FadeInDown } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { ScaledSheet } from "react-native-size-matters";

const SplashScreen: React.FC = () => {
  useEffect(() => {
    const splash_timeout = setTimeout(() => {
      router.replace("/login");
    }, 3000);
    return () => clearTimeout(splash_timeout);
  }, []);
  [];

  return (
    <View style={styles.main}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image
        style={styles.image}
        source={require("@assets/images/logo_t.png")}
      />

      <Animated.View
        style={styles.animatedImage}
        entering={FadeInDown.delay(400).duration(800)}
      >
        <Image
          style={styles.image2}
          source={require("@assets/images/tree.png")}
        />
        <Text style={styles.text}>
          Carbon and plastic neutral deliveries in india
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = ScaledSheet.create({
  main: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: { width: "200@s", height: "100@s", top: "-50@s" },
  animatedImage: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "100@s",
  },
  image2: { width: "160@s", height: "100@s" },
  text: {
    color: Colors.active_light,
    fontSize: "24@s",
    textAlign: "center",
    marginTop: "20@s",
    fontWeight: "500",
    marginHorizontal: "40@s",
  },
});
