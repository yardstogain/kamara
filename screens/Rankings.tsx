import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { RootTabScreenProps } from "../types";

export default function Rankings({
  navigation,
}: RootTabScreenProps<"Rankings">) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary }}>catsas</Text>
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
