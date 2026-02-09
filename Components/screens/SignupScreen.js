import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";

export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* ✅ Top Illustration */}
        <View style={styles.hero}>
          <Image
            source={require("../../assets/EcoDrop-Img3.png")}
            style={styles.heroImg}
            resizeMode="cover"
          />
        </View>

        <View style={styles.card}>
          <View style={styles.nameRow}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#6B7280"
              style={[styles.input, styles.half]}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#6B7280"
              style={[styles.input, styles.half]}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#6B7280"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#6B7280"
            style={styles.input}
            value={pw}
            onChangeText={setPw}
            secureTextEntry
          />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#6B7280"
            style={styles.input}
            value={pw2}
            onChangeText={setPw2}
            secureTextEntry
          />

          <Pressable style={styles.agreeRow} onPress={() => setAgree(!agree)}>
            <Text style={styles.checkbox}>{agree ? "☑" : "☐"}</Text>
            <Text style={styles.agreeText}>
              I agree to the Terms and Conditions
            </Text>
          </Pressable>

          <Pressable
            style={[styles.primaryBtn, !agree && styles.disabledBtn]}
            onPress={() => {
              if (!agree) return;
              if (pw !== pw2) return alert("Passwords do not match!");
              alert("Signed Up!");
            }}
          >
            <Text style={styles.primaryBtnText}>SIGN UP</Text>
          </Pressable>

          <View style={styles.bottomRow}>
            <Text style={styles.small}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate("Signin")}>
              <Text style={[styles.small, styles.link]}>Sign In.</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const BG = "#8A9468";
const BROWN = "#4A3B13";

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG },
  container: { flex: 1, backgroundColor: BG },

  hero: {
    height: 240,
    overflow: "hidden",
  },
  heroImg: {
    width: "100%",
    height: "100%",
  },

  card: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.06)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 20,
  },
  nameRow: { flexDirection: "row", gap: 10 },
  half: { flex: 1 },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },

  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 8,
  },
  checkbox: { fontSize: 16, opacity: 0.8 },
  agreeText: { fontSize: 12, opacity: 0.75 },

  primaryBtn: {
    backgroundColor: BROWN,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledBtn: { opacity: 0.5 },
  primaryBtnText: { color: "#fff", fontWeight: "800", letterSpacing: 1 },

  bottomRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  small: { fontSize: 12, color: "#1F2937", opacity: 0.8 },
  link: { color: BROWN, fontWeight: "700" },
});
