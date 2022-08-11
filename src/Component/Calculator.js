import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

const Calculator = (props) => {
  const clickHandler = () => {
    const { valueBtn } = props;
    props.clickHandler(valueBtn);
  };

  return (
    <button type="button" onClick={clickHandler}>{props.valueBtn}</button>
  );
};

Calculator.propTypes = {
  valueBtn: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

Calculator.defaultProps = {
  clickHandler: null,
};

export default Calculator;
