import { View, Text, StyleSheet, Pressable } from "react-native";

import { Link } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function ServicesHeader() {
  return (
    <View>

      {/* Header */}
      <View style={styles.services}>
        <Text style={styles.servicesText}>Services</Text>
      </View>

      {/* Services Row */}
      <View style={styles.servicesRow}>

        <Link href="/airtime" asChild>
            <Pressable style={styles.serviceItem}>
                <View style={styles.iconCard}>
                <Ionicons name="phone-portrait-outline" size={22} color="#fff" />
                </View>
                <Text style={styles.label}>Airtime</Text>
            </Pressable>
        </Link>

    

        <Pressable style={styles.serviceItem}>
          <View style={styles.iconCard}>
            <Ionicons name="wifi-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.label}>Data</Text>
        </Pressable>

        <Pressable style={styles.serviceItem}>
          <View style={styles.iconCard}>
            <Ionicons name="receipt-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.label}>Bills</Text>
        </Pressable>

        <Pressable style={styles.serviceItem}>
          <View style={styles.iconCard}>
            <Ionicons name="swap-horizontal-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.label}>Transfer</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  services: {
    marginTop: 30,
    marginBottom: 12,
  },

  servicesText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },

  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  serviceItem: {
    alignItems: "center",
    flex: 1,
  },

  iconCard: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  label: {
    fontSize: 13,
    color: "#111",
    fontWeight: "500",
  },
});
