import React, { useState } from 'react';
import './App.css';
import Calculator from './Component/Calculator';

import calculate from './logic/calculate';
import ButtonCard from './UI/ButtonCard';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const clickHandler = (event) => {
    const newState = calculate(state, event);
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };
  return (
    <div className="card">
      <div className="screen">{state.next || state.total || 0 }</div>
      <ButtonCard>
        {
          btnValues.flat().map((btn, i) => (
            <Calculator clickHandler={clickHandler} key={i} valueBtn={btn} />
          ))
        }
      </ButtonCard>
    </div>
  );
};

export default App;
