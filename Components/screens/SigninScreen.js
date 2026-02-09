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

export default function SigninScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* ✅ Top Illustration */}
        <View style={styles.hero}>
          <Image
            source={require("../../assets/EcoDrop-Img1.png")}
            style={styles.heroImg}
            resizeMode="cover"
          />
        </View>

        {/* Form Card */}
        <View style={styles.card}>
          <TextInput
            placeholder="Email"
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
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={styles.rowBetween}>
            <Text style={styles.small}>☑ Remember Me</Text>
            <Pressable onPress={() => alert("Forgot password pressed")}>
              <Text style={[styles.small, styles.link]}>Forgot Password?</Text>
            </Pressable>
          </View>

          <Pressable style={styles.primaryBtn} onPress={() => alert("Sign In!")}>
            <Text style={styles.primaryBtnText}>SIGN IN</Text>
          </Pressable>

          <Text style={styles.orText}>OR CONTINUE WITH</Text>

          <View style={styles.socialRow}>
            <Pressable
              style={[styles.socialBtn, styles.google]}
              onPress={() => alert("Google")}
            >
              <Text style={styles.socialText}>G  Google</Text>
            </Pressable>

            <Pressable
              style={[styles.socialBtn, styles.facebook]}
              onPress={() => alert("Facebook")}
            >
              <Text style={styles.socialText}>f  Facebook</Text>
            </Pressable>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.small}>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={[styles.small, styles.link]}>Sign Up.</Text>
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
    overflow: "hidden", // ✅ makes image crop clean
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
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  small: { fontSize: 12, color: "#1F2937", opacity: 0.8 },
  link: { color: BROWN, fontWeight: "700" },

  primaryBtn: {
    backgroundColor: BROWN,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 2,
  },
  primaryBtnText: { color: "#fff", fontWeight: "800", letterSpacing: 1 },

  orText: {
    textAlign: "center",
    marginVertical: 12,
    fontSize: 11,
    opacity: 0.6,
  },

  socialRow: { flexDirection: "row", gap: 12 },
  socialBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  google: { opacity: 0.95 },
  facebook: { opacity: 0.95 },
  socialText: { fontWeight: "700", opacity: 0.75 },

  bottomRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
