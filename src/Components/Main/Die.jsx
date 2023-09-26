
import "./main.css"
import PropTypes from "prop-types"
function Die({value, isHeld, handleClick}) {
    const style = { background: isHeld ? "#59E391" : "#fff" };
  return (
    <div className="die-container" style={style} onClick={handleClick}>
      <p> {value} </p>
    </div>
  );
}

Die.propTypes = {
  value: PropTypes.number,
  isHeld: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Die