import {
    Text,
    View,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
}
from "react-native";

export default function TransactionHeader() {
    return(
        <KeyboardAvoidingView>
            <View style={styles.transactionHeader}>
                <Text style={styles.transactionText}> Recent Transactions </Text>
            
                <Pressable>
                    <Text style={styles.allTransaction}> View All </Text>
                </Pressable>
            </View>

            {/* */}
            <View>

            </View>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    transactionHeader: {
     marginTop: 30,
     justifyContent: "space-between",
     flexDirection: "row",
  },

  transactionText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },

  allTransaction: {
    fontSize: 15,
  },
})