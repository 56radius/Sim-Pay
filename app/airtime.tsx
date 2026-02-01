import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

import { useState } from "react";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

import { Image } from "expo-image";

// Images
const mtn = require("../assets/images/mtn.jpg");
const airtel = require("../assets/images/airtel.png");
const glo = require("../assets/images/glo.png");
const etisalat = require("../assets/images/etisalat.jpeg");

const NETWORKS = [
  { id: "mtn", name: "MTN", bonus: "20% bonus data", logo: mtn },
  { id: "airtel", name: "Airtel", bonus: "10% bonus data", logo: airtel },
  { id: "glo", name: "Glo", bonus: "15% bonus data", logo: glo },
  { id: "9mobile", name: "9mobile", bonus: "5% bonus data", logo: etisalat },
];

export default function AirtimeScreen() {
  const [number, setNumber] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("mtn");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Recipient Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Recipient Number</Text>

          <Pressable>
            <MaterialIcons
              name="perm-contact-calendar"
              size={26}
              color="#111"
            />
          </Pressable>
        </View>

        <View style={styles.borderContainer}>
          <View style={styles.titleRow}>
            <Feather name="phone-incoming" size={22} color="#111" />
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              placeholderTextColor="#777"
              value={number}
              onChangeText={setNumber}
              maxLength={11}
              keyboardType="number-pad"
            />
          </View>
        </View>
      </View>

      {/* Network Title */}
      <View style={styles.networkHeader}>
        <Text style={styles.networkTitle}>Select Network Provider</Text>
      </View>

      {/* Network Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.networkScroll}
      >
        {NETWORKS.map((item) => {
          const isSelected = selectedNetwork === item.id;

          return (
            <Pressable
              key={item.id}
              onPress={() => setSelectedNetwork(item.id)}
              style={[
                styles.bundlesCard,
                isSelected && styles.selectedCard,
              ]}
            >
              <Image style={styles.image} source={item.logo} />

              <Text style={styles.bundlesText}>{item.name}</Text>

              <View
                style={[
                  styles.bonusCard,
                  isSelected && { backgroundColor: "#6A0DAD" },
                ]}
              >
                <Text style={styles.bonusText}>{item.bonus}</Text>
              </View>

              {isSelected && (
                <View style={styles.checkIcon}>
                  <AntDesign name="check" size={12} color="#fff" />
                </View>
              )}
            </Pressable>
          );
        })}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    color: "#111",
    marginBottom: 10,
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 30,
    elevation: 3,
  },

  borderContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DDD",
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: "85%",
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#111",
  },

  networkHeader: {
    width: "90%",
    marginTop: 25,
    marginBottom: 10,
    color: "#111",
    fontWeight: 'bold',
  },

  networkTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },

  networkScroll: {
    paddingLeft: 16,
    paddingRight: 6,
  },

  bundlesCard: {
    width: 130,
    height: "23%",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    marginRight: 14,
    alignItems: "center",

  },

  selectedCard: {
    borderWidth: 2,
    borderColor: "black",
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginBottom: 10,
  },

  bundlesText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 6,
  },

  bonusCard: {
    backgroundColor: "#9C27B0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  bonusText: {
    fontSize: 11,
    color: "#fff",
  },

  checkIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "black",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
