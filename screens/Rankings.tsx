import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { RootTabScreenProps } from "../types";
import { HeadingOne, BodyOne } from "../components/Typo";

export default function Rankings({
  navigation,
}: RootTabScreenProps<"Rankings">) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <HeadingOne>Yards to Gain</HeadingOne>
      <Pressable
        onPress={() => navigation.navigate("Fraud List Info")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <BodyOne>Click me</BodyOne>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
