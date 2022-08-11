import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

class Calculator extends React.Component {
  clickHandler = () => {
    const { valueBtn } = this.props;
    this.props.clickHandler(valueBtn);
  }

  render() {
    return (
      <button type="button" onClick={this.clickHandler}>{this.props.valueBtn}</button>
    );
  }
}

Calculator.propTypes = {
  valueBtn: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

Calculator.defaultProps = {
  clickHandler: null,
};

export default Calculator;
