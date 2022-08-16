import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import CalculatorContainer from './Component/CalculatorContainer';
import Quote from './Component/Quote';
/* eslint-disable arrow-body-style */

const App = () => (
  <div className="container">
    <div className="header">
      <h1>Math Magicians</h1>
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorContainer />} />
      <Route path="/quotes" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
