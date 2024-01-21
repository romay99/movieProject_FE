import React, { userState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {};
  return (
    <div>
      <button onClick={increase}>+1</button>
      <button>-1</button>
      <p></p>
    </div>
  );
}

export default Counter;
