import { useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import Header from "../components/Header";
import { Product } from "../../types/types";
import { usePostContext } from "../../context/PostContext"; // Adjusted import path

export default function PostAd() {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("Cars");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();
  const { addPost } = usePostContext();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const validateTitle = (title: string) => {
    return title.trim().length >= 3;
  };

  const validatePrice = (price: string) => {
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    return price.trim() !== "" && priceRegex.test(price) && parseFloat(price) > 0;
  };

  const validateDescription = (description: string) => {
    return description.trim().length >= 10;
  };

  const submitAd = () => {
    if (!validateTitle(title)) {
      Alert.alert("Error", "Title must be at least 3 characters long.");
      return;
    }
    if (!validatePrice(price)) {
      Alert.alert("Error", "Price must be a positive number (e.g., 100 or 99.99).");
      return;
    }
    if (!validateDescription(description)) {
      Alert.alert("Error", "Description must be at least 10 characters long.");
      return;
    }
    if (!image) {
      Alert.alert("Error", "Please upload an image.");
      return;
    }

    const newPost: Product = {
      id: Date.now().toString(), // Unique ID using timestamp
      title,
      price,
      description,
      image,
      category,
    };
    addPost(newPost);
    Alert.alert("Success", `Ad posted successfully on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })}!`);
    // Reset form
    setTitle("");
    setPrice("");
    setDescription("");
    setImage(null);
    router.push("/"); // Navigate to home page
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Post Ad</Text>
        <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
        <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
          <Picker.Item label="Vehicles" value="Vehicles" />
          <Picker.Item label="Properties" value="Properties" />
          <Picker.Item label="Jobs" value="Jobs" />
          <Picker.Item label="Electronics" value="Electronics" />
          <Picker.Item label="Animals" value="Animals" />
          <Picker.Item label="Sports" value="Sports" />
          <Picker.Item label="Educations" value="Educations" />
          <Picker.Item label="Fashion & Beauty" value="Fashion & Beauty" />
        </Picker>
        <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
        <TextInput placeholder="Description" value={description} onChangeText={setDescription} multiline style={styles.input} />
        <Button title="Upload Image" onPress={pickImage} />
        {image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
              <Text style={styles.removeText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
        <Button title="Submit" onPress={submitAd} color="#00A551" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { padding: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, height: 100 },
  picker: { borderWidth: 1, marginBottom: 10 },
  imageContainer: {
    position: "relative",
    marginTop: 10,
  },
  image: { width: 200, height: 200 },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    padding: 2,
  },
  removeText: { color: "white", fontSize: 16 },
});