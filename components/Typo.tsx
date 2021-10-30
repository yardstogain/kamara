import * as React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleProp, Text, TextStyle } from "react-native";

export type BaseTypoProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactChild;
};

export function BaseTypo({ style, children, ...props }: BaseTypoProps) {
  const { colors } = useTheme();
  return (
    <Text
      style={{
        fontFamily: "Lato",
        color: colors.text,
        ...style,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}

export function HeadingOne({ style, children }: BaseTypoProps) {
  return <BaseTypo style={{ fontSize: 32, ...style }}>{children}</BaseTypo>;
}

export function BodyOne({ style, children }: BaseTypoProps) {
  return <BaseTypo style={{ fontSize: 16, ...style }}>{children}</BaseTypo>;
}
