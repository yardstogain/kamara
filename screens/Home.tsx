import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import FraudListInfo from "../components/FraudListInfo";
import { BodyOne, HeadingOne } from "../components/Typo";

export default function Home() {
  return (
    <View style={styles.container}>
      <HeadingOne>Welcome Home</HeadingOne>
      <BodyOne>Thanks</BodyOne>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
