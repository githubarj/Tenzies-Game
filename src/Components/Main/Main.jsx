import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import "./main.css";

function Main() {
  const [diceArray, setDiceArray] = useState(allNewDice());

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return arr;
  }

  function hold(id) {
    setDiceArray((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, isHeld: !item.isHeld } : item
      )
    );
    console.log(diceArray);
  }

  const dice = diceArray.map((item) => {
    return <Die key={item.id} {...item} handleClick={() => hold(item.id)} />;
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
