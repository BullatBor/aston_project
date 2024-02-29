import React, { Suspense } from "react";
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
import { ErrorBoundary } from "react-error-boundary";
import { ErrorText } from "./ui/components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense>
          <div className="pages">
            <Routes>
              <Route
                path="*"
                element={
                  <ErrorBoundary fallbackRender={ErrorText}>
                    <MainPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="signIn"
                element={
                  <ErrorBoundary fallbackRender={ErrorText}>
                    <SignIn />
                  </ErrorBoundary>
                }
              />
              <Route
                path="signUp"
                element={
                  <ErrorBoundary fallbackRender={ErrorText}>
                    <SignUp />
                  </ErrorBoundary>
                }
              />
              <Route
                path="favorites"
                element={
                  <ErrorBoundary fallbackRender={ErrorText}>
                    <WithAuthRequired>
                      <Favorites />
                    </WithAuthRequired>
                  </ErrorBoundary>
                }
              />
              <Route
                path="history"
                element={
                  <ErrorBoundary fallbackRender={ErrorText}>
                    <WithAuthRequired>
                      <UserHistory />
                    </WithAuthRequired>
                  </ErrorBoundary>
                }
              />
              <Route
                path="search/:query?"
                element={
                  <ErrorBoundary fallbackRender={ErrorText}>
                    <WithAuthRequired>
                      <SearchPage />
                    </WithAuthRequired>
                  </ErrorBoundary>
                }
              />
              <Route
                path="movie/:id?"
                element={
                  <ErrorBoundary fallbackRender={ErrorText}>
                    <MoviePage />
                  </ErrorBoundary>
                }
              />
            </Routes>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
