import PropTypes from 'prop-types';

const Button = (props) => {
  return <button>{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
