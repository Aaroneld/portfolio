import React from 'react';
import './App.css';
import Intro from './intro'
import Skills from './skills'
import Portfolio from './portfolio'

function App() {
  return (
    <div className="App">
      <div>
        <Intro />
      </div>
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
