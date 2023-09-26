
import "./main.css"
import PropTypes from "prop-types"
function Die({value}) {
  return (
    <div className='die-container'>
        <p> {value} </p>
    </div>
  )
}

Die.propTypes = {
    value: PropTypes.number,
}

export default Die