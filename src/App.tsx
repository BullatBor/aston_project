import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./ui/components/Header/Header";
import { SignUp } from "./pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Favorites } from "./pages/Favorites/Favorites";
import { UserHistory } from "./pages/History/UserHistory";
import { SignIn } from "./pages/SignIn/SignIn";
import { Toaster } from "react-hot-toast";
import WithAuthRequired from "./hoc/withAuthRequired";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { reAuth } from "./services/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { setUser, user } from "./store/auth/authSlice";
import { auth } from "./firebase-config";

function App() {
  const dispatch = useDispatch();
  const userInfo = useSelector(user);
  useEffect(() => {
    return () => {
      const storedData = localStorage.getItem("user");
      const myParsedObject = storedData ? JSON.parse(storedData) : {};
      auth.onAuthStateChanged(async (myParsedObject) => {
        if (myParsedObject) {
          dispatch(setUser(myParsedObject));
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route
              path="favorites"
              element={
                <WithAuthRequired>
                  <Favorites />
                </WithAuthRequired>
              }
            />
            <Route
              path="history"
              element={
                <WithAuthRequired>
                  <UserHistory />
                </WithAuthRequired>
              }
            />
            <Route
              path="search/:query?"
              element={
                <WithAuthRequired>
                  <SearchPage />
                </WithAuthRequired>
              }
            />
            <Route path="movie/:id?" element={<MoviePage />} />
          </Routes>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
