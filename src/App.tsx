import React from "react";
import "./App.css";
import Preloader from "./ui/elements/Preloader/Preloader";
import { Header } from "./ui/components/Header/Header";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
