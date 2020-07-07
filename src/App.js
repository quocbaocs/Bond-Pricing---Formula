import React from 'react';
import './App.css';
import MyForm from './components/Calulator_bond';
import YtmFrom from './components/ytmcaculator';
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div>
          <MyForm />
        </div>
        <div>
          <YtmFrom />
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </header>
    </div>
  );
}

export default App;
