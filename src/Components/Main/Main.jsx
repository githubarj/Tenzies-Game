import { useState } from "react";
import Die from "./Die";
import "./main.css";

function Main() {
  const [diceArray, setDiceArray] = useState(allNewDice());

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    return arr;
  }

  const dice = diceArray.map((item, index) => {
    return <Die key={index} value={item} />;
  });

  function reRoll() {
    setDiceArray(allNewDice());
  }

  return (
    <div className="main-container">
      <div className="main-center">
        <div className="dice">{dice}</div>
        <button className="roll" onClick={reRoll}>
          Roll
        </button>
      </div>
    </div>
  );
}

export default Main;
