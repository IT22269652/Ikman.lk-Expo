import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { PostProvider } from "../../context/PostContext";

type TabParamList = {
  index: undefined;
  chat: undefined;
  "post-ad": undefined;
  profile: undefined;
  details: { product: string };
};

export default function TabLayout({}: BottomTabScreenProps<TabParamList>) {
  return (
    <PostProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#00A551",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name="chatbox" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="post-ad"
          options={{
            title: "Post Ad",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="details"
          options={{
            title: "Details",
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
      </Tabs>
    </PostProvider>
  );
}