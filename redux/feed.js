import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        posts: [],
    },
    reducers: {
        setFeed(state, action) {
            state.posts = action.payload;
        },
        clearFeed(state) {
            state.posts = [];
        },
    },
});

export const { setFeed, clearFeed } = feedSlice.actions;

export default feedSlice.reducer;
