import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Header from "../components/Header";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Nuradha Dakshina");
  const [address, setAddress] = useState("123, Main Street, Colombo");
  const [email, setEmail] = useState("nuradha@example.com");
  const [contact, setContact] = useState("+94 71 234 5678");
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Do you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () => router.push("/"),
        },
      ],
      { cancelable: true }
    );
  };

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert("Success", "Profile updated successfully!");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <View style={styles.sidebar}>
          <ScrollView>
            <Text style={styles.sidebarHeader}>Nuradha Dakshina</Text>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>My Ads</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>My membership</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Saved searches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Phone Numbers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, styles.activeMenu]}>
              <Text style={[styles.menuText, styles.activeText]}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Stay safe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>How to sell fast?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={styles.menuText}>Log out</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.profileContent}>
          <LinearGradient
            colors={["#4facfe", "#00f2fe"]}
            style={styles.profileCard}
          >
            <View style={styles.profileHeader}>
              <Image
                source={{ uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" }}
                style={styles.profileImage}
              />
              <Text style={styles.welcomeText}>Welcome, Nuradha!</Text>
              <Text style={styles.dateText}>
                Today is {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} at {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Colombo" })}
              </Text>
            </View>
            <View style={styles.profileDetails}>
              {isEditing ? (
                <>
                  <TextInput
                    style={[styles.detailText, styles.input]}
                    value={name}
                    onChangeText={setName}
                    placeholder="Name"
                    autoCapitalize="words"
                  />
                  <TextInput
                    style={[styles.detailText, styles.input]}
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Address"
                  />
                  <TextInput
                    style={[styles.detailText, styles.input]}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <TextInput
                    style={[styles.detailText, styles.input]}
                    value={contact}
                    onChangeText={setContact}
                    placeholder="Contact"
                    keyboardType="phone-pad"
                  />
                </>
              ) : (
                <>
                  <Text style={styles.detailLabel}>Name:</Text>
                  <Text style={styles.detailText}>{name}</Text>
                  <Text style={styles.detailLabel}>Address:</Text>
                  <Text style={styles.detailText}>{address}</Text>
                  <Text style={styles.detailLabel}>Email:</Text>
                  <Text style={styles.detailText}>{email}</Text>
                  <Text style={styles.detailLabel}>Contact:</Text>
                  <Text style={styles.detailText}>{contact}</Text>
                </>
              )}
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Ads Posted</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Favorites</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
            >
              <Text style={styles.editButtonText}>{isEditing ? "Save" : "Edit Profile"}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  mainContent: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: "35%",
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    paddingTop: 20,
  },
  sidebarHeader: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "#f0f0f0",
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 14,
    color: "#333",
  },
  activeMenu: {
    backgroundColor: "#e6f0ff",
    borderLeftWidth: 5,
    borderLeftColor: "#459cf8ff",
  },
  activeText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  profileContent: {
    flex: 1,
    padding: 20,
  },
  profileCard: {
    flex: 1,
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  dateText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  profileDetails: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 14,
    color: "#fff",
  },
  editButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
});