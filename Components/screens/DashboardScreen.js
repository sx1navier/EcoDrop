import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
} from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Gabby!</Text>
          <Text style={styles.subGreeting}>Ready to recycle?</Text>
        </View>
        <Pressable
          style={styles.profileBtn}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Balance Card - Links to Wallet */}
        <Pressable
          style={styles.balanceCard}
          onPress={() => navigation.navigate("Wallet")}
        >
          <View>
            <Text style={styles.balanceLabel}>Your Eco-Points</Text>
            <Text style={styles.balanceValue}>1,250</Text>
            <Text style={styles.balanceSub}>≈ 12.5 kg plastic saved</Text>
          </View>
          <Text style={styles.leafIcon}>🌿</Text>
        </Pressable>

        {/* Quick Actions Grid */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.gridContainer}>
          {/* Scan Action */}
          <Pressable
            style={[styles.actionCard, styles.scanCard]}
            onPress={() => navigation.navigate("QRScreen")}
          >
            <Text style={styles.actionIcon}>📷</Text>
            <Text style={styles.actionText}>Scan to Deposit</Text>
          </Pressable>

          {/* Map Action */}
          <Pressable
            style={styles.actionCard}
            onPress={() => navigation.navigate("EcoMap")}
          >
            <Text style={styles.actionIcon}>🗺️</Text>
            <Text style={styles.actionText}>Find Bin</Text>
          </Pressable>
        </View>

        {/* Recent Activity Section */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <View style={styles.activityItem}>
            <View style={styles.activityIconBg}>
              <Text>♻️</Text>
            </View>
            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>Deposited Plastic</Text>
              <Text style={styles.activityDate}>Feb 10, 2:30 PM</Text>
            </View>
            <Text style={styles.activityPoints}>+10 pts</Text>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityIconBg}>
              <Text>🎟️</Text>
            </View>
            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>Redeemed Voucher</Text>
              <Text style={styles.activityDate}>Feb 08, 9:15 AM</Text>
            </View>
            <Text style={[styles.activityPoints, styles.negativePoints]}>
              -50 pts
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Colors from your existing theme
const BROWN = "#4A3B13";
const GREEN_ACCENT = "#8A9468";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FFF9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: BROWN,
  },
  subGreeting: {
    fontSize: 14,
    color: "#666",
  },
  profileBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E9DEC9", // Beige from landing
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  balanceCard: {
    backgroundColor: BROWN,
    borderRadius: 20,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  balanceLabel: {
    color: "#E9DEC9",
    fontSize: 14,
    marginBottom: 4,
  },
  balanceValue: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  balanceSub: {
    color: GREEN_ACCENT,
    fontSize: 12,
    marginTop: 4,
  },
  leafIcon: {
    fontSize: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 30,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  scanCard: {
    backgroundColor: GREEN_ACCENT, // Highlight the primary action
    borderColor: GREEN_ACCENT,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  actionText: {
    fontWeight: "600",
    color: "#333",
  },
  activityList: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  activityIconBg: {
    width: 36,
    height: 36,
    backgroundColor: "#F0F5F0",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  activityDate: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  activityPoints: {
    fontSize: 14,
    fontWeight: "bold",
    color: GREEN_ACCENT,
  },
  negativePoints: {
    color: "#D32F2F",
  },
});