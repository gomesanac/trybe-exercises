import React from 'react';
import './App.css';
import Dropdown from './Dropdown';

const content = [
  {id: 1, item: 'a'},
  {id: 2, item: 'b'},
  {id: 3, item: 'c'},
  {id: 4, item: 'd'},
];

function App() {
  return (
    <div className="App">
      <Dropdown list={content}>
        Lista legal
      </Dropdown>
    </div>
  );
}

export default App;
