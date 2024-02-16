import React from "react";
import "./App.css";
import Preloader from "./ui/elements/Preloader/Preloader";
import { Header } from "./ui/components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Preloader />
    </div>
  );
}

export default App;
