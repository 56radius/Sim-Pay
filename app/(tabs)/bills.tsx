import { 
  Text, 
  View,
  StyleSheet,
 }
from "react-native";

import { StatusBar } from "expo-status-bar";

export default function BillsScreen() {
  return (
    <>
    <View  style={styles.container}>
      <Text style={styles.textStyle}> This is the Services Page </Text>
    </View> 
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29292e"
  },

  textStyle: {
    color: "#fff",
  },
})