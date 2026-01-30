import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
} from "react-native";

import { useState } from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";

const ProfileImage = require("@/assets/images/anu.png");

export default function LoginScreen() {
  const [password, setPassword] = useState("");

  const isValid = password.length === 6;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>PayFlow</Text>

        <View style={styles.imageContainer}>
          <Image source={ProfileImage} style={styles.image} />
        </View>

        <Text style={styles.name}>Dami</Text>
        <Text style={styles.phone}>810 •••• ••652</Text>

        <TextInput
          style={styles.input}
          placeholder="••••••"
          placeholderTextColor="#9ca3af"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          keyboardType="number-pad"
          maxLength={6}
        />

        <Link href="/(tabs)/home" asChild>
          <Pressable
            disabled={!isValid}
            style={[
              styles.button,
              !isValid && { opacity: 0.5 },
            ]}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </Link>

        <Text style={styles.footerText}>
          Not you? <Text style={styles.linkText}>Switch account</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f14",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "#1a1a22",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "300",
    marginBottom: 20,
  },

  imageContainer: {
    marginBottom: 12,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 6,
  },

  phone: {
    color: "#9ca3af",
    fontSize: 13,
    marginBottom: 30,
  },

  input: {
    width: "100%",
    backgroundColor: "#111118",
    color: "#fff",
    paddingVertical: 16,
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 10,
    borderRadius: 14,
    marginBottom: 24,
  },

  button: {
    width: "100%",
    backgroundColor: "#6366f1",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },

  footerText: {
    marginTop: 20,
    color: "#9ca3af",
    fontSize: 13,
  },

  linkText: {
    color: "#6366f1",
  },
});
