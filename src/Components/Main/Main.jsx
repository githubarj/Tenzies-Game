import Die from "./Die";
import "./main.css";

function Main() {
  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    return arr;
  }

  console.log(allNewDice());

  return (
    <div className="main-container">
      <div className="main-center">
        <div className="dice">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </div>
    </div>
  );
}

export default Main;
