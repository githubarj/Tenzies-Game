import { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import "./main.css";
import Confetti from "react-confetti";

function Main() {
  const [diceArray, setDiceArray] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    setTenzies(
      diceArray.every(
        (item) => diceArray[0].value === item.value && item.isHeld
      )
    );
  }, [diceArray]);


  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(generateNewDie());
    }
    return arr;
  }

  function reRoll() {
    setDiceArray((previousArr) =>
      previousArr.map((arrItem) => {
        return arrItem.isHeld ? arrItem : generateNewDie();
      })
    );
  }

  function hold(id) {
    setDiceArray((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item
      )
    );
  }

  const dice = diceArray.map((item) => {
    return <Die key={item.id} {...item} handleClick={() => hold(item.id)} />;
  });

  return (
    <div className="main-container">
      {tenzies && <Confetti />}
      <div className="main-center">
        <div className="text">
          <h1 className="title">Tenzies</h1>
          <p className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dice">{dice}</div>
        <button className="roll" onClick={reRoll}>
          {!tenzies ? "Roll" : "New Game"}
        </button>
      </div>
    </div>
  );
}

export default Main;
