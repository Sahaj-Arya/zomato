import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "@/utils/Constants";
import InputComp from "@/components/InputComp";

const Login: React.FC = () => {
  return (
    <View style={styles.main}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image
        source={require("@assets/images/login.png")}
        style={styles.image}
      />
      <InputComp />
    </View>
  );
};

export default Login;

const styles = ScaledSheet.create({
  main: {
    backgroundColor: Colors.primary,
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "280@s",
    borderRadius: "60@s",
  },
});
