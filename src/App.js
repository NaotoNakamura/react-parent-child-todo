import ParentForm from './ParentForm';
import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState([{id: 1, parentText: 'test'}]);
  const [parentId, setParentId] = React.useState(0);
  const [parentText, setParentText] = React.useState('');

  return (
    <div className="App">
      TODOフォーム
        <ParentForm 
          text={text} 
          setText={setText} 
          parentText={parentText} 
          setParentText={setParentText}
          parentId={parentId}
          setParentId={setParentId}
        />
    </div>
  );
}

export default App;
