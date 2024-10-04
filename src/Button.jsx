import PropTypes from 'prop-types';

const Button = (props) => {
  return <button>{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.func.isRequired,
};

export default Button;
