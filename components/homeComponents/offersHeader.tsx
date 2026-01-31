import { View, Text, StyleSheet, Pressable, ScrollView, Dimensions } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Get screen width for responsive card sizing
const screenWidth = Dimensions.get("window").width;

export default function OffersHeader() {
  return (
    <View>
      {/* Header */}
      <View style={styles.offersHeader}>
        <Text style={styles.offersText}>Offers & Rewards</Text>
      </View>

      {/* Horizontal Scroll for cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 9 }}
      >
        {/* Card 1 */}
        <View style={styles.offersCard}>
          <View style={styles.offersCardHeader}>
            <View style={styles.titleRow}>
              <View style={styles.tag}>
                <FontAwesome name="tag" size={16} color="#000" />
              </View>
              <Text style={styles.offersCardTitle}>Get 10% cashback</Text>
            </View>

            <Pressable>
              <EvilIcons name="close" size={22} color="#fff" />
            </Pressable>
          </View>
          <Text style={styles.middleText}>On your next purchase of ₦20,000 or more</Text>
          <View style={styles.bottomCardHeader}>
            <Text style={styles.muted}>6 days left</Text>
            <Pressable>
              <Text style={styles.claim}>Claim now</Text>
            </Pressable>
          </View>
        </View>

        {/* Card 2 */}
        <View style={[styles.offersCard, { marginLeft: 16 }]}>
          <View style={styles.offersCardHeader}>
            <View style={styles.titleRow}>
              <View style={styles.tag}>
                <FontAwesome name="tag" size={16} color="#000" />
              </View>
              <Text style={styles.offersCardTitle}>Get 15% cashback</Text>
            </View>

            <Pressable>
              <EvilIcons name="close" size={22} color="#fff" />
            </Pressable>
          </View>
          <Text style={styles.middleText}>On your next purchase of ₦50,000 or more</Text>
          <View style={styles.bottomCardHeader}>
            <Text style={styles.muted}>3 days left</Text>
            <Pressable>
              <Text style={styles.claim}>Claim now</Text>
            </Pressable>
          </View>
        </View>

        {/* Card 3 */}
        <View style={[styles.offersCard, { marginLeft: 16 }]}>
          <View style={styles.offersCardHeader}>
            <View style={styles.titleRow}>
              <View style={styles.tag}>
                <FontAwesome name="tag" size={16} color="#000" />
              </View>
              <Text style={styles.offersCardTitle}>Get 20% cashback</Text>
            </View>

            <Pressable>
              <EvilIcons name="close" size={22} color="#fff" />
            </Pressable>
          </View>
          <Text style={styles.middleText}>On your next purchase of ₦100,000 or more</Text>
          <View style={styles.bottomCardHeader}>
            <Text style={styles.muted}>2 days left</Text>
            <Pressable>
              <Text style={styles.claim}>Claim now</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  offersHeader: {
    marginTop: 40,
    marginBottom: 12,
  },

  offersText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },

  offersCard: {
    width: screenWidth * 0.7, // cards take 70% of screen width
    backgroundColor: "#1a1a22",
    padding: 16,
    borderRadius: 14,
  },

  offersCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  tag: {
    width: 28,
    height: 28,
    backgroundColor: "#fff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  offersCardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  middleText: {
    color: "#d1d5db",
    fontSize: 13,
    marginBottom: 12,
  },

  bottomCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  muted: {
    color: "#9ca3af",
    fontSize: 12,
  },

  claim: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});
