// features/bookmarks/bookmarkSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mark: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addToBook: (state, action) => {
      state.mark.push(action.payload);
    },
  },
});

export const { addToBook } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
