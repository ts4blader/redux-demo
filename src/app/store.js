import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user-list/UserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});
