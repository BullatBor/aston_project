import React from "react";
import "./App.css";
import { Header } from "./ui/components/Header/Header";
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
