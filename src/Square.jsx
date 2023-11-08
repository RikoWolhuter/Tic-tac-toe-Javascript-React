import PropTypes from 'prop-types';
import './styles.css';


function Square({ value, onClick }) {
  const textStyle = {
    color: value === 'X' ? 'blue' : value === 'O' ? 'orange' : 'inherit',
  };

  return (
    <button className="square" onClick={onClick} style={textStyle}>
      {value}
    </button>
  );
}



Square.propTypes = {
  value: PropTypes.string, // Adjust the type according to your use case
  onClick: PropTypes.func.isRequired,
};

export default Square;
