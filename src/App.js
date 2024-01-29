import React from "react";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import SignupForm from "./pages/SignUpForm";

function App() {
  return (
    <div className="App">
      <nav>
        <span className="main">
          <Link to={"/"}>메인홈페이지로</Link>
        </span>
        <span className="login">
          <Link to={"/login"}>로그인창으로</Link>
        </span>
        <span className="signup">
          <Link to={"/signup"}>회원가입창으로</Link>
        </span>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/signup" element={<SignupForm></SignupForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
