import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="black-nav">
          <Link to="/">
            <span className="main-menu">Home</span> |
          </Link>
          <Link to="/about">
            <span className="about">About</span>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
