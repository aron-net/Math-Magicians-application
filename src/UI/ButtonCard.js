import React from 'react';
import './ButtonCard.css';
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

class ButtonCard extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="buttonBox">{ children }</div>;
  }
}

export default ButtonCard;
