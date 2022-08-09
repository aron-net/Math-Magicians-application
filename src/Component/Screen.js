import React from 'react';
import { Textfit } from 'react-textfit';
import './Screen.css';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */

class Screen extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <Textfit className="screen" mode="single" max={70}>
        {value}
      </Textfit>
    );
  }
}

export default Screen;
