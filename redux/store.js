import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import feedSlice from "./feed";

export default configureStore({
    reducer: {
        auth: authSlice,
        feed: feedSlice,
    },
});
