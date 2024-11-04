import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const InputComp: React.FC<InputProps> = ({
  value,
  onChangeText,
  onBlur,
  onFocus,
}) => {
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </View>
  );
};

export default InputComp;

const styles = ScaledSheet.create({
  main: { height: 20, marginHorizontal: 20,backgroundColor:Colors },
  input: { height: 20, borderWidth: 1, borderRadius: 5 },
});
