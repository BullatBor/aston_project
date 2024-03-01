import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { auth, fireStore } from "../firebase-config";
import { setIsLoading, setUser, user } from "../store/auth/authSlice";



export function reAuth() {
  return auth.onAuthStateChanged(async userInfo => {
    if (userInfo) {
      return userInfo
    }
    //dispatch(setIsLoading(false));
  })
}

export function fireBaseRegister(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => credentials.user)
    .then((user) => {
      if (user.email) {
        setDoc(doc(fireStore, "users", user.email), {
          favourite: [],
          history: [],
        });
      }
      return user;
    })
    .catch((error) => {
      toast.error(error.message);
    });
}

export function fireBaseLogin(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => credentials.user)
    .catch((error) => {
      toast.error(error.message);
    });
}

export function fireBaseLogout() {
  return signOut(auth);
}
