import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

interface User {
  username: string;
  password: string;
  name: string;
  contactNumber: string;
  address: string;
  email: string;
}

export default function Header() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [users, setUsers] = useState<User[]>([]); // Dummy user storage
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const router = useRouter();

  // Registration form state
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Login form state
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = () => {
    // Validation checks
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      Alert.alert("Error", "Name is required");
      return;
    } else if (!nameRegex.test(name)) {
      Alert.alert("Error", "Name must contain only letters and spaces");
      return;
    }

    if (!contactNumber) {
      Alert.alert("Error", "Contact number is required");
      return;
    } 

    if (!address) {
      Alert.alert("Error", "Address is required");
      return;
    }

    if (!password) {
      Alert.alert("Error", "Password is required");
      return;
    } else if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    if (!email) {
      Alert.alert("Error", "Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // If all validations pass
    const newUser: User = { username: email, password, name, contactNumber, address, email };
    setUsers([...users, newUser]);
    setIsRegisterVisible(false);
    setIsLoginVisible(true);
    // Reset form
    setName("");
    setContactNumber("");
    setAddress("");
    setPassword("");
    setEmail("");
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === loginUsername && u.password === loginPassword
    );
    if (user) {
      Alert.alert("Success", "Registration Successful!");
      setIsLoginVisible(false);
      router.push("/"); // Navigate to home page
      // Reset login form
      setLoginUsername("");
      setLoginPassword("");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  const handleSearch = () => {
    router.push({
      pathname: "/",
      params: { searchQuery },
    });
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logo} onPress={() => router.push("/")}>
        <Text style={styles.logoText}>ikman.lk</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch} // Trigger search on "Enter"
      />
      <TouchableOpacity style={styles.button} onPress={() => setIsLoginVisible(true)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setIsRegisterVisible(true)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Login Modal */}
      <Modal
        visible={isLoginVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsLoginVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Username (Email)"
              value={loginUsername}
              onChangeText={setLoginUsername}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Password"
              value={loginPassword}
              onChangeText={setLoginPassword}
              secureTextEntry
            />
            <Text
              style={styles.registerLink}
              onPress={() => {
                setIsLoginVisible(false);
                setIsRegisterVisible(true);
              }}
            >
              Don't have an account? Register
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleLogin}>
              <Text style={styles.modalButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLoginVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Register Modal */}
      <Modal
        visible={isRegisterVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsRegisterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Register</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Contact Number"
              value={contactNumber}
              onChangeText={setContactNumber}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Text
              style={styles.loginLink}
              onPress={() => {
                setIsRegisterVisible(false);
                setIsLoginVisible(true);
              }}
            >
              Have an account? Login
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleRegister}>
              <Text style={styles.modalButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsRegisterVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00A551",
    padding: 10,
    paddingTop: 40,
  },
  logo: {
    marginRight: 10,
  },
  logoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 5,
  },
  button: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  registerLink: {
    color: "#00A551",
    marginBottom: 10,
  },
  loginLink: {
    color: "#00A551",
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: "#00A551",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
  closeText: {
    color: "#00A551",
    fontSize: 14,
  },
});