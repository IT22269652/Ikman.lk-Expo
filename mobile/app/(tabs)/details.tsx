import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "../components/Header";
import { Product } from "../../types/types";

export default function Details() {
  const { product } = useLocalSearchParams<{ product: string }>();
  const productData: Product = JSON.parse(product as string);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <Image source={{ uri: productData.image }} style={styles.detailImage} />
        <View style={styles.detailsCard}>
          <Text style={styles.title}>{productData.title}</Text>
          <Text style={styles.price}>{productData.price}</Text>
          <Text style={styles.description}>{productData.description}</Text>
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>Posted On:</Text>
            <Text style={styles.infoText}>Tuesday, September 02, 2025, 12:38 PM +0530</Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>Category:</Text>
            <Text style={styles.infoText}>{Object.keys(useLocalSearchParams())[0].charAt(0).toUpperCase() + Object.keys(useLocalSearchParams())[0].slice(1)}</Text>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Seller</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  content: { flex: 1 },
  detailImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  detailsCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "#00A551",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },
  infoSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
    color: "#333",
  },
  infoText: {
    fontSize: 16,
    color: "#555",
  },
  contactButton: {
    backgroundColor: "#00A551",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  contactButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});