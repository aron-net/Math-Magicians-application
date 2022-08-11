import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler = (event) => {
    const newState = calculate(this.state, event);
    this.setState((previousState) => ({
      ...previousState,
      ...newState,
    }));
  };

  render() {
    return (
      <div className="card">
        <div className="screen">{this.state.next || this.state.total || 0}</div>
        <ButtonCard>
          {
            btnValues.flat().map((btn, i) => (
              <Calculator clickHandler={this.clickHandler} key={i} valueBtn={btn} />
            ))
          }
        </ButtonCard>
      </div>

    );
  }
}

export default App;
