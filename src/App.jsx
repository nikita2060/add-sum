import React, { useState } from "react";
import { findsum } from "./libs/sumfinder";

export default function App() {
  const [numbers, setNumbers] = useState(""); 
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    // Convert string to array of numbers
    const numArray = numbers
      .split(",")              
      .map((n) => parseFloat(n.trim()) || 0); // convert to numbers, default 0

    setSum(findsum(numArray)); // pass array to your function
  };

  return (
    <div>
      <input
        id="input"
        type="text"
        placeholder="Enter numbers separated by comma"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button id="sum"onClick={handleSum}>Sum</button>
      <p id ="result">Result: {sum}</p>
    </div>
  );
}
