import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import { Link } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";


//importing components
import TransactionHeader from "@/components/dashboardComponents/TransactionHeader";

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="dark" />

      <View style={styles.container}>

        {/* ===== HEADER ===== */}
        <View style={styles.header}>
          <Text style={styles.headerText}>PayFlow</Text>

          <View style={styles.headerIcons}>
            <Ionicons name="shield-checkmark-outline" size={22}color="#111" /> 
            <Ionicons name="notifications-outline" size={22} color="#111" /> 
          </View>
        </View>

        {/* ===== WALLET CARD ===== */}
        <View style={styles.card}>

          {/* Card Header */}
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Wallet Balance</Text>

            <Pressable>
              <Ionicons
                name="eye-outline"
                size={20}
                color="#fff"
              />
            </Pressable>
          </View>

          {/* Balance */}
          <Text style={styles.balance}>₦2,400.50</Text>

          {/* Date */}
          <Text style={styles.date}>
            Last updated • 19:25
          </Text>

          {/* Add Money */}
          <Link href="/profile" asChild>
            <Pressable style={styles.button}>
              <AntDesign name="plus-circle" size={24} color="black" />
              <Text style={styles.buttonText}>
                Add Money
              </Text>
            </Pressable>
          </Link>

        </View>


        {/* Servives */}
        <View style={styles.services}>
          <Text style={styles.servicesText}> Services </Text>
        </View>


        {/* Offers and Rewards */}
        <View style={styles.services}>
          <Text style={styles.servicesText}> Offers and Rewards </Text>
        </View>

        {/* Transaction  */}
        <TransactionHeader />
        

      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },

  /* ===== CARD ===== */
  card: {
    width: "100%",
    backgroundColor: "#1a1a22",
    padding: 24,
    borderRadius: 18,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  cardTitle: {
    color: "#9ca3af",
    fontSize: 14,
  },

  balance: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 8,
  },

  date: {
    color: "#6b7280",
    fontSize: 12,
    marginBottom: 24,
  },

  /* ===== BUTTON ===== */
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 30,
    gap: 8,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },

  services: {
    marginTop: 30,
  },

  servicesText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },

  
});
