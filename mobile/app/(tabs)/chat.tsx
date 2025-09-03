import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import { Chat } from "../../types/types";

const chats: Chat[] = [
  { id: "1", name: "John Doe", lastMessage: "Interested in your car!", time: "10:30 AM", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: "2", name: "Jane Smith", lastMessage: "Can you send more photos?", time: "09:15 AM", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: "3", name: "Ali Khan", lastMessage: "What’s the price?", time: "Yesterday", image: "https://randomuser.me/api/portraits/men/3.jpg" },
];

export default function ChatScreen() { // Renamed from Chat to ChatScreen
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState<string>("");

  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => setSelectedChat(item)}>
      <Image source={{ uri: item.image }} style={styles.chatImage} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <View style={styles.chatList}>
          <FlatList
            data={chats}
            keyExtractor={(item) => item.id}
            renderItem={renderChatItem}
            ListHeaderComponent={<Text style={styles.chatHeader}>Messages</Text>}
          />
        </View>
        {selectedChat ? (
          <View style={styles.chatWindow}>
            <View style={styles.chatHeaderSelected}>
              <Image source={{ uri: selectedChat.image }} style={styles.chatImageSelected} />
              <Text style={styles.chatNameSelected}>{selectedChat.name}</Text>
            </View>
            <View style={styles.messagesContainer}>
              <Text style={styles.message}>You: Hi, is the item still available?</Text>
              <Text style={styles.receivedMessage}>{selectedChat.name}: Yes, it is!</Text>
              <Text style={styles.message}>You: Great, can we meet tomorrow?</Text>
              <Text style={styles.receivedMessage}>{selectedChat.name}: Sure, let’s discuss time.</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message..."
                placeholderTextColor="#888"
              />
              <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.noChatSelected}>
            <Text style={styles.noChatText}>Select a chat to start messaging</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  mainContent: { flex: 1, flexDirection: "row" },
  chatList: { width: "35%", backgroundColor: "#fff", borderRightWidth: 1, borderRightColor: "#ddd" },
  chatHeader: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "#f0f0f0",
  },
  chatItem: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  chatImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  chatDetails: { flex: 1 },
  chatName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  chatMessage: { fontSize: 14, color: "#666" },
  chatTime: { fontSize: 12, color: "#888" },
  chatWindow: { flex: 1, backgroundColor: "#e9ecef" },
  chatHeaderSelected: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#d1e7dd",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  chatImageSelected: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  chatNameSelected: { fontSize: 18, fontWeight: "bold", color: "#155724" },
  messagesContainer: {
    flex: 1,
    padding: 15,
  },
  message: {
    backgroundColor: "#d1e7dd",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-end",
    maxWidth: "70%",
  },
  receivedMessage: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
    maxWidth: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
  sendButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  noChatSelected: { flex: 1, justifyContent: "center", alignItems: "center" },
  noChatText: { fontSize: 18, color: "#666" },
});