import React from 'react';
import Header from './Header';
import logo1 from './logo1.png';
import example1 from './example1.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo1} className="logo1" alt="logo" />
      <Header />
      <header className="App-header">
        <div className="body">
          <img src={example1} className="example1" alt="example1" />
        </div>
      </header>
    </div>
  );
}

export default App;
