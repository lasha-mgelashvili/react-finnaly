import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <AppRoutes />
      <Navbar />
    </div>
  );
}

export default App;
