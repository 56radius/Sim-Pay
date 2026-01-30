import { 
  Text, 
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
 }
from "react-native";

import { StatusBar } from "expo-status-bar";

import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.card}> 
        {/* Section for text */}
        <View>
           <Text style={styles.title}> Wallet Balance </Text>
           <Text style={styles.subTitle}> $2,4000.50 </Text>
           <Text style={styles.dateTitle}> Last Updated: 19:25</Text>
        </View>

        {/* Add Money Buttonr */}
        <Link href="/profile">
          <Pressable style={styles.button}>
              <Text style={styles.buttonText}> + Add Money </Text>
          </Pressable>
        </Link>
      </View>
      <Text style={styles.textStyle}> THis is the home page </Text>
    </View> 
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  textStyle: {
    color: "black",
  },

  card: {
    width: "90%",
    paddingVertical: 35,
    paddingHorizontal: 24,
    backgroundColor: "#1a1a22",
    justifyContent: "center",
    borderRadius: 10,
  },

  title: {
    color: "#fff",
    marginBottom: 30,
  },

  subTitle:{
    color: "#fff",
    marginBottom: 20,
  },

  dateTitle: {
    color: "#fff",
    marginBottom: 10,
  },

  button: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 30,
  },

  buttonText: {
    color: "black",
  },
})