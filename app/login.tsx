import { 
  Text, 
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
 }
from "react-native";

import { useState } from "react";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [password, setPassword] = useState("")
  return (
    <KeyboardAvoidingView 
      style={styles.container}
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

        <Link 
          href={"/home"}
          style={styles.button}
        >
          <Text> Login </Text>
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
    marginBottom: 150,
  },

  input: {
    marginBottom: 30,
    backgroundColor: "white",
    width: "100%",
    padding: 14,
  },

  button: {
    color: "#fff",
  },
})