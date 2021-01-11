import ParentForm from './ParentForm';
import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState([]);
  const [parentText, setParentText] = React.useState('');

  return (
    <div className="App">
      TODOフォーム
      <ParentForm text={text} setText={setText} parentText={parentText} setParentText={setParentText}/>
    </div>
  );
}

export default App;
