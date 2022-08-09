import React from 'react';
import './Calculator.css';
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

class Calculator extends React.Component {
  render() {
    const { valueBtn } = this.props;
    return (
      <button type="button">{valueBtn}</button>
    );
  }
}

export default Calculator;
