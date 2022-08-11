import React from 'react';
import './ButtonCard.css';
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

function ButtonCard({ children }) {
  return <div className="buttonBox">{ children }</div>;
}
export default ButtonCard;
