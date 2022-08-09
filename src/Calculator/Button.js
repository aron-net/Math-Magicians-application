import './Button.css';
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

const Button = ({ className, value }) => (
  <button className={className}>{value}</button>
);

export default Button;
