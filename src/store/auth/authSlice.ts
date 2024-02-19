import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../store";

interface initialStateType {
  user: User | null;
  isLoading: boolean;
  isAuth: boolean;
}

let initialState: initialStateType = {
  user: null,
  isLoading: false,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuth = true;
    },
    deleteUser(state) {
      state.user = null;
      state.isAuth = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const isLoading = (state: RootState) => state.userReducer.isLoading;
export const user = (state: RootState) => state.userReducer.user;

export const { setUser, deleteUser, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
