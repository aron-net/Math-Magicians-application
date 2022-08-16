import React, { useState } from 'react';
import Calculator from './Calculator';
import calculate from '../logic/calculate';
import ButtonCard from '../UI/ButtonCard';
import './CalculatorContainer.css';
/* eslint-disable react/no-array-index-key */

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const CalculatorContainer = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const clickHandler = (event) => {
    const newState = calculate(state, event);
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };
  return (
    <div className="container-calculator">
      <h2 className="header-Cal">Let&lsquo;s do some math!</h2>
      <div className="ar">
        <div className="card">
          <div className="screen">{state.next || state.total || 0}</div>
          <ButtonCard>
            {btnValues.flat().map((btn, i) => (
              <Calculator clickHandler={clickHandler} key={i} valueBtn={btn} />
            ))}
          </ButtonCard>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
