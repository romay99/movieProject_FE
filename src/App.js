import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["애월", "제주", "제주공항"]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">MovieProject</div>
      <div className="list">
        <h4 className="">
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}>
            😍
          </span>
          {따봉}
        </h4>
        <p>날짜</p>
        <hr />
      </div>
      <div className="list">
        <h4 className="">{글제목[1]}</h4>
        <p>날짜</p>
        <hr />
      </div>
      <div className="list">
        <h4 className="">{글제목[2]}</h4>
        <p>날짜</p>
        <hr />
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h3>글 제목</h3>
      <p>글 내용</p>
    </div>
  );
}

export default App;
