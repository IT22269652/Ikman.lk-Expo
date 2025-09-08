import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { usePostContext } from "../../context/PostContext";
import Header from "../components/Header";

export default function Posts() {
  const { posts, setPosts } = usePostContext();
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // form states
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");

  // delete post
  const handleDelete = (id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
    Alert.alert("Success", "Post deleted");
  };

  // open update form
  const handleUpdate = (post: any) => {
    setSelectedPostId(post.id);
    setUpdatedTitle(post.title);
    setUpdatedCategory(post.category);
    setUpdatedPrice(post.price);
    setUpdatedDescription(post.description);
    setUpdatedImage(post.image);
    setIsUpdateModalVisible(true);
  };

  // save updated post
  const handleSaveUpdate = () => {
    if (!selectedPostId) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === selectedPostId
          ? {
              ...post,
              title: updatedTitle,
              category: updatedCategory,
              price: updatedPrice,
              description: updatedDescription,
              image: updatedImage,
            }
          : post
      )
    );
    setIsUpdateModalVisible(false);
    Alert.alert("Success", "Post updated successfully!");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>All Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image && (
              <Image source={{ uri: item.image }} style={styles.image} />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text>{item.category}</Text>
              <Text>${item.price}</Text>
              <Text>{item.description}</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: "red" }]}
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: "#00A551" }]}
                  onPress={() => handleUpdate(item)}
                >
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* Update Modal */}
      <Modal
        visible={isUpdateModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsUpdateModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Ad</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Title"
              value={updatedTitle}
              onChangeText={setUpdatedTitle}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Category"
              value={updatedCategory}
              onChangeText={setUpdatedCategory}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Price"
              value={updatedPrice}
              onChangeText={setUpdatedPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Description"
              value={updatedDescription}
              onChangeText={setUpdatedDescription}
              multiline
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Image URL"
              value={updatedImage}
              onChangeText={setUpdatedImage}
            />
            <Button title="Save" onPress={handleSaveUpdate} color="#00A551" />
            <TouchableOpacity onPress={() => setIsUpdateModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  textContainer: { flex: 1 },
  postTitle: { fontSize: 18, fontWeight: "bold" },
  buttonRow: { flexDirection: "row", marginTop: 10 },
  button: {
    flex: 1,
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  modalInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  closeText: { color: "#00A551", fontSize: 14, marginTop: 10 },
});
