import React from 'react';
import './App.css';
import Display from './Display.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Currency converter
        </p>
      </header>
        <div>
          <Display/>
        </div>
    </div>
  );
}

export default App;
