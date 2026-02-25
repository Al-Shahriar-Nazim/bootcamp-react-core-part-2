import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const cardStyle = {
    border: "2px solid green",
    borderRadius: "20px",
    margin: "20px",
    padding: "20px",
  };
  const handleTigger = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div style={cardStyle}>
      <h3>Total count :{count}</h3>
      <button onClick={handleTigger}>Tigger</button>
    </div>
  );
};

export default Counter;
