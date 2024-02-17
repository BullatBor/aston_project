import React from "react";
import "./App.css";
import { Header } from "./ui/components/Header/Header";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Favorites } from "./pages/Favorites/Favorites";
import { UserHistory } from "./pages/History/UserHistory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="history" element={<UserHistory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
