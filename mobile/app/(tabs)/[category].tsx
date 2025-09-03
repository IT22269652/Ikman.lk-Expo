import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Header from "../components/Header";
import { products } from "../../constants/data";
import { Product } from "../../types/types";

export default function CategoryList() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();
  const categoryPosts: Product[] = products[category as keyof typeof products] || [];

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>{category?.charAt(0).toUpperCase() + category?.slice(1)} Listings</Text>
      <FlatList
        data={categoryPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postItem}
            onPress={() => router.push({ pathname: "/(tabs)/details", params: { product: JSON.stringify(item) } })}
          >
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <View style={styles.postDetails}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postPrice}>{item.price}</Text>
              <Text style={styles.postDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  },
  listContainer: {
    padding: 10,
  },
  postItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  postDetails: {
    flex: 1,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postPrice: {
    fontSize: 16,
    color: "#00A551",
    marginVertical: 5,
  },
  postDescription: {
    fontSize: 14,
    color: "#555",
  },
});