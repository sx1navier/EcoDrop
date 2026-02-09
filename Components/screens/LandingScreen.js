import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function LandingScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace("SignIn"), 10000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/EcoDropLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>EcoDrop</Text>
      <Text style={styles.subtitle}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9DEC9",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2F3A1E",
  },
  subtitle: {
    marginTop: 6,
    color: "#2F3A1E",
    opacity: 0.7,
  },
});
