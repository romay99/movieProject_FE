import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      console.log("Data received:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <div className="login-form">
        <form>
          <div className="login-element">
            <label htmlFor="username">아이디 : </label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="login-element">
            <label htmlFor="password">비밀번호 : </label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="login-element">
            <button type="button" onClick={handleLogin} id="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
