import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true, // enable redux dev tools
});

console.log(store.getState());
