import {
    Text,
    View,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
}
from "react-native";

export default function OffersHeader() {
    return(
        <KeyboardAvoidingView>
            <View style={styles.offersHeader}>
                <Text style={styles.offersText}> Offers & Rewards </Text>
            </View>

            {/* Offers Card Section */}
            <View style={styles.offersCard}>
                {/* Top Header */}
                <View style={styles.offersCardHeader}>
                    <Text style={styles.offersCardTitle}></Text>

                    <View style={styles.close}>
                        <Text> Close </Text>
                    </View>
                </View>

                {/* Middle text */}
                <View>
                    <Text> On your next purchase of $20 or more</Text>
                </View>

                {/* Bottom Header */}
            </View>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
  offersHeader: {
     marginTop: 40,
     justifyContent: "center",
  },

  offersText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },

  allTransaction: {
    fontSize: 15,
  },

  offersCard: {

  },

  offersCardHeader: {

  },

  offersCardTitle: {

  },

  close:{

  },
})