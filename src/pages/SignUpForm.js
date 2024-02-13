import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    member_id: "",
    member_pw: "",
    member_email: "",
    member_name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8080/member/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const idCheck = async () => {
    try {
      const response = await axios.post("http://localhost:8080/member/idCheck", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("사용 가능한 ID 입니다");
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("이미 존재하는 ID 입니다");
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <div className="signup-form">
        <form>
          <div className="signup-element">
            <label htmlFor="member_id">아이디:</label>
            <input
              type="text"
              id="member_id"
              name="member_id"
              value={formData.member_id}
              onChange={handleChange}
            />
            <button onClick={idCheck}>ID 중복체크</button>
          </div>
          <div className="signup-element">
            <label htmlFor="member_pw">비밀번호:</label>
            <input
              type="password"
              id="member_pw"
              name="member_pw"
              value={formData.member_pw}
              onChange={handleChange}
            />
          </div>
          <div className="signup-element">
            <label htmlFor="member_email">이메일:</label>
            <input
              type="email"
              id="member_email"
              name="member_email"
              value={formData.member_email}
              onChange={handleChange}
            />
          </div>
          <div className="signup-element">
            <label htmlFor="member_name">이름:</label>
            <input
              type="text"
              id="member_name"
              name="member_name"
              value={formData.member_name}
              onChange={handleChange}
            />
          </div>
          <div className="signup-element">
            <button type="button" onClick={handleSignup} id="signup-button">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
