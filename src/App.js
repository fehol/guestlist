import React from 'react';
import logo from './logo.svg';
import './App.css';

const baseUrl = 'http://localhost:5000';

const response = await fetch(`${baseUrl}/`);
const allGuests = await response.json();

function App() {
  return <div className="App"></div>;
}

export default App;
