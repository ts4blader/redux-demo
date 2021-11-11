import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/users";

const initialState = users.map((item, index) => {
  return { ...item, id: "user" + index };
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      let { id } = action.payload;
      let founded = state.findIndex((item) => item.id === id);
      if (founded !== -1) {
        state[founded] = action.payload;
      }
    },
    removeUser: (state, action) => {
      let { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { setUser, addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
