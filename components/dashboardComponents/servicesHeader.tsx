import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
}
from "react-native";

export default function ServicesHeader() {
    return(
        <KeyboardAvoidingView>
            <View style={styles.services}>
                      <Text style={styles.servicesText}> Services </Text>
             </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  services: {
    marginTop: 30,
  },

  servicesText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },
})