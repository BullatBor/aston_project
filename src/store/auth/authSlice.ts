import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../store";

interface initialStateType {
  user: User | null;
  isLoading: boolean;
  isAuth: boolean;
  signStatus: "pending" | "success" | "none";
}

let initialState: initialStateType = {
  user: null,
  isLoading: false,
  isAuth: false,
  signStatus: "pending",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuth = true;
      state.signStatus = "success";
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<"pending" | "success" | "none">,
    ) => {
      state.signStatus = action.payload;
    },
  },
});

export const isLoading = (state: RootState) => state.userReducer.isLoading;
export const user = (state: RootState) => state.userReducer.user;
export const isAuth = (state: RootState) => state.userReducer.isAuth;
export const signStatus = (state: RootState) => state.userReducer.signStatus;

export const { setUser, logout, setIsLoading, setStatus } = userSlice.actions;
export default userSlice.reducer;
