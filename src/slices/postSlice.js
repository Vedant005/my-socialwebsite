import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks for async actions
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
});

export const addBookmark = createAsyncThunk(
  "posts/addBookmark",
  async (postId) => {
    const response = await axios.get(`/api/users/bookmarks/${postId}`);
    return response.data;
  }
);

// Slice
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBookmark.fulfilled, (state, action) => {
        // Handle bookmark success, if needed
      });
  },
});

export default postSlice.reducer;
