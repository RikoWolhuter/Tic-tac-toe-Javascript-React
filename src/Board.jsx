import PropTypes from 'prop-types'; // Import PropTypes
import './styles.css';
import Square from './Square';

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

// Add prop validations for squares and onClick
Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string), // Assuming squares is an array of strings
  onClick: PropTypes.func.isRequired,
};

export default Board;
