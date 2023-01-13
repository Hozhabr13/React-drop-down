import React from 'react';
import DropDown from './components/dropDown';
import './App.css';

function App() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <DropDown />
      </form>
    </div>
  );
}

export default App;
