import { 
  Text, 
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
 }
from "react-native";

import { useState } from "react";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [password, setPassword] = useState("")
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}> PayFlow</Text>
        <Text style={styles.subTitle}> Welcome Back </Text>

        <TextInput 
          style={styles.input}
          placeholder="Enter your 6 digit password"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

       <Link href={"/(tabs)/home"}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
          </Pressable>
       </Link>
    </KeyboardAvoidingView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29292e"
  },

  title: {
    color: "#fff",
    fontWeight: 300,
    fontSize: 30,
    marginBottom: 8,
  },

  subTitle: {
    color: "#fff",
    marginBottom: 60,
  },

  input: {
    width: "80%",
    color: "#fff",
    backgroundColor: "gray",
    padding: 14,
    borderRadius: 15,
    marginBottom: 15,
    paddingVertical: 15,
  },

  button: {
    width: "60%",
    padding: 10,
    backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 9,
    paddingVertical: 12,
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 300,
    color: "#fff",
  },
})