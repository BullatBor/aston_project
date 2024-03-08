import { useDispatch } from "react-redux";
import { auth } from "../firebase-config";
import {
  logout,
  setIsLoading,
  setStatus,
  setUser,
} from "../store/auth/authSlice";
import {
  fireBaseLogin,
  fireBaseLogout,
  fireBaseRegister,
} from "../services/firebaseAuth";
import { User } from "firebase/auth";

export const useAuth = () => {
  const dispatch = useDispatch();

  const reAuth = () => {
    return auth.onAuthStateChanged(async (user: User | null) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setStatus("none"));
      }
    });
  };

  const registration = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    dispatch(setIsLoading(true));

    const user = await fireBaseRegister(email, password);

    if (user) {
      dispatch(setUser(user));
      dispatch(setIsLoading(false));
      return true;
    } else {
      dispatch(setStatus("none"));
      dispatch(setIsLoading(false));
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch(setIsLoading(true));

    const user = await fireBaseLogin(email, password);

    if (user) {
      dispatch(setUser(user));
      dispatch(setIsLoading(false));
      return true;
    } else {
      dispatch(setStatus("none"));
      dispatch(setIsLoading(false));
      return false;
    }
  };

  const userLogout = async () => {
    dispatch(setIsLoading(true));
    await fireBaseLogout();
    dispatch(logout());
    dispatch(setIsLoading(false));
  };

  return {
    reAuth,
    registration,
    login,
    userLogout,
  };
};
