import React from 'react';
import './App.css';
import Button from './Calculator/Button';
import Screen from './Calculator/Screen';
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
      value: '0',
    };
  }

  render() {
    return (
      <div className="card">
        <Screen value={this.state.value} />
        <ButtonCard>
          {
            btnValues.flat().map((btn, i) => (
              <Button key={i} value={btn} />
            ))
          }
        </ButtonCard>
      </div>

    );
  }
}

export default App;
