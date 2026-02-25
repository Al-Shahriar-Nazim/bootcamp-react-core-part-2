import React, { useState } from "react";

const Players = () => {
  const [runs, setRuns] = useState(0);
  const [sixs, setSixs] = useState(0);
  const handleRuns = () => {
    const newRuns = runs + 1;
    setRuns(newRuns);
  };
  const handleSixs = () => {
    const newSixes = runs + 6;
    const updatedSixes = sixs + 1;
    setSixs(updatedSixes);
    setRuns(newSixes);
  };
  return (
    <div className="card">
      <h3>Total Runs :{runs}</h3>
      {runs > 50 && <p>your scoure is : 50 runs</p>}
      <p>Total sixs :{sixs}</p>
      <button onClick={handleRuns}>single run</button>
      <button onClick={handleSixs}>Six</button>
    </div>
  );
};

export default Players;
