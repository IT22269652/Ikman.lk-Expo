import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet } from "react-native";

export default function Header() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logo} onPress={() => console.log("ikman.lk pressed")}>
        <Text style={styles.logoText}>ikman.lk</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
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
            <TextInput style={styles.modalInput} placeholder="Username" />
            <TextInput style={styles.modalInput} placeholder="Password" secureTextEntry />
            <Text style={styles.registerLink} onPress={() => { setIsLoginVisible(false); setIsRegisterVisible(true); }}>
              Don't have an account? Register
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setIsLoginVisible(false)}>
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
            <TextInput style={styles.modalInput} placeholder="Name" />
            <TextInput style={styles.modalInput} placeholder="Contact Number" keyboardType="phone-pad" />
            <TextInput style={styles.modalInput} placeholder="Address" />
            <TextInput style={styles.modalInput} placeholder="Password" secureTextEntry />
            <TextInput style={styles.modalInput} placeholder="Email" keyboardType="email-address" />
            <Text style={styles.loginLink} onPress={() => { setIsRegisterVisible(false); setIsLoginVisible(true); }}>
              Have an account? Login
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setIsRegisterVisible(false)}>
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