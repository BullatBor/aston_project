import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Header } from "./ui/components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Toaster } from "react-hot-toast";
import WithAuthRequired from "./hoc/withAuthRequired";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorText } from "./ui/components/ErrorBoundary/ErrorBoundary";
import Preloader from "./ui/elements/Preloader/Preloader";
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const UserHistory = lazy(() => import("./pages/History/UserHistory"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));

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
          <ErrorBoundary fallbackRender={ErrorText}>
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
            </Suspense>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
