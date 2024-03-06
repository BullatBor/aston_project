import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import WithAuthRequired from "../../../hoc/withAuthRequired";
import { MainPage } from "../../../pages/MainPage/MainPage";
import Preloader from "../../elements/Preloader/Preloader";
import s from "./main.module.css";
import cn from "classnames";
import { useTheme } from "../../../context/ThemeContext";

const Favorites = lazy(() => import("../../../pages/Favorites/Favorites"));
const SearchPage = lazy(() => import("../../../pages/SearchPage/SearchPage"));
const UserHistory = lazy(() => import("../../../pages/History/UserHistory"));
const SignIn = lazy(() => import("../../../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../../../pages/SignUp/SignUp"));
const MoviePage = lazy(() => import("../../../pages/MoviePage/MoviePage"));

export const Main = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(s.wrapper, {
        [s.dark]: theme === "dark",
        [s.light]: theme === "light",
      })}
    >
      <Suspense fallback={<Preloader width={50} />}>
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
          <Route path="search/:query?" element={<SearchPage />} />
          <Route path="movie/:id?" element={<MoviePage />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </Suspense>
    </div>
  );
};
