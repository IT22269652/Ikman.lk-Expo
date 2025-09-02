import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import Header from "../components/Header";
import { useRouter } from "expo-router";


const categories = [
  { id: "1", name: "Vehicles", image: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/index-sub-content/rotator/01-images/25-ch-electric-blazerev-rotator-v2.jpg?imwidth=1920", key: "vehicles" },
  { id: "2", name: "Electronics", image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg", key: "electronics" },
  { id: "3", name: "Jobs", image: "https://media.istockphoto.com/id/1198042442/photo/beautiful-female-manager-at-a-factory-holding-a-tablet-and-team-of-blue-collar-workers.jpg?s=612x612&w=0&k=20&c=bt35oK8UUYyM_XfzvfBenvNpdCuqdviNSW-CLUEIrQg=", key: "jobs" },
  { id: "4", name: "Property", image: "https://www.shutterstock.com/image-photo/business-woman-signing-contract-making-260nw-2523078339.jpg", key: "property" },
  { id: "5", name: "Animals", image: "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg?h=430&w=710&hash=7FEB820D235A44B76B271060E03572C7", key: "animals" },
  { id: "6", name: "Sports", image: "https://marketplace.canva.com/WpYTg/MAEw4JWpYTg/1/tl/canva-various-sport-equipment-gear-MAEw4JWpYTg.jpg", key: "sports" },
  { id: "7", name: "Educations", image: "https://www.avanse.com/blogs/images/10feb-blog-2023.jpg", key: "educations" },
  { id: "8", name: "Fashion & Beauty", image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D", key: "fashion_beauty" },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={{ uri: "https://media.licdn.com/dms/image/v2/C511BAQFRxPZQt0nP4g/company-background_10000/company-background_10000/0/1583947911853/ikman_lk_cover?e=2147483647&v=beta&t=nQrtAk7ndx3yvPktyd6_Ut3hL8SHnL7R6luD1OglUnU" }}
        style={styles.headerImage}
      />
      <Text style={styles.categoryTitle}>Browse Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryGrid}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.categoryItem} 
            onPress={() => router.push(`/(tabs)/${item.key}`)}
          >
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerImage: { width: "100%", height: 100, resizeMode: "cover" },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  },
  categoryGrid: {
    padding: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#eae9e9ff",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    textAlign: "center",
  },
});