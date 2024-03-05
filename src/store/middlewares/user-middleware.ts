import { createListenerMiddleware } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { setUser, logout } from "../auth/authSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setUser,
  effect: (action) => {
    toast.success(`Вы авторизовались: ${action.payload.email}`);
  },
});

listenerMiddleware.startListening({
  actionCreator: logout,
  effect: () => {
    toast.success("Вы вышли из системы");
  },
});
