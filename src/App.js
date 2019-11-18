import React from 'react';
import Header from './Header';
import logo1 from './logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo1} className="logo1" alt="logo" />
      <Header />
      <header className="App-header">
        <p>
          Dyanna Tolman
        </p>
      </header>
    </div>
  );
}

export default App;
