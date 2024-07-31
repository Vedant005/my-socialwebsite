import { createContext, useContext, useState } from "react";
import axios from "axios";
import { posts as initialPosts } from "../backend/db/posts";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);

  const likePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId
          ? {
              ...post,
              likes: { ...post.likes, likeCount: post.likes.likeCount + 1 },
            }
          : post
      )
    );
  };

  const addComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId
          ? { ...post, comments: [...(post.comments || []), comment] }
          : post
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, likePost, addComment }}>
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
