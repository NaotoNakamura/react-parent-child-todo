import ParentForm from './component/ParentForm';
import React from 'react';
import './App.css';
import { useTarget } from './component/useTarget';

function App() {
  const { text, parentText, handleChange, handleClick } = useTarget()
  return (
    <div className="App">
      TODOフォーム
      <ParentForm text={text} parentText={parentText} handleChange={handleChange} handleClick={handleClick} />
    </div>
  );
}

export default App;
