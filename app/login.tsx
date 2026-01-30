import { 
  Text, 
  View,
  StyleSheet,
 }
from "react-native";

export default function LoginScreen() {
  return (
    <View  style={styles.container}>
      <Text style={styles.textStyle}> Hello expo app </Text>
    </View> 
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