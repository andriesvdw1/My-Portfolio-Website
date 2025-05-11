import React from "react";
import "./InteractiveBarChart.css";
import { useState } from "react";
import BarColumn from "../BarColumn/BarColumn";
function InteractiveBarChart({ h }) {
  const [numbers, setNumbers] = useState([40, 80, 60, 50, 70, 20, 30, 10]);
  const [sorted, setSorted] = useState(false);
  const originalNums = [40, 80, 60, 50, 70, 20, 30, 10];
  const sortNums = () => {
    setNumbers([...numbers].sort((a, b) => a - b));
    setSorted(true);
  };

  const sortNumsDesc = () => {
    setNumbers([...numbers].sort((a, b) => b - a));
    setSorted(true);
  };

  const resetNums = () => {
    setNumbers(originalNums);
    setSorted(false);
  };

  return (
    <>
      <h1  id='bar-chart'>Interactive bar chart like element sorting demonstration</h1>
      <div className="bar-column" style={{ height: `${h}px` }}>
        {h}
        <div className="bar-chart">
          {numbers.map((num, index) => (
            <BarColumn key={index} h={num} />
          ))}
          <button onClick={sortNums}>Sort Ascending</button>
          <button onClick={sortNumsDesc}>Sort Descending</button>
          <button onClick={resetNums}>Reset</button>
          <p>Sorted: {sorted ? "Yes" : "No"}</p>
        </div>
      </div>
    </>
  );
}

export default InteractiveBarChart;
