import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import FraudListInfo from "../components/FraudListInfo";
import { BodyOne, HeadingOne } from "../components/Typo";

export default function FraudInfo() {
  return (
    <View style={styles.container}>
      <HeadingOne>Hello!</HeadingOne>
      <BodyOne>This is better</BodyOne>
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
