import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../types/types";

interface PostContextType {
  posts: Product[];
  addPost: (post: Product) => void;
  setPosts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Product[]>([]);

  // Add new post
  const addPost = (post: Product) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
