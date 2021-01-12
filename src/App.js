import ParentForm from './ParentForm';
import React from 'react';
import './App.css';

export const ChildIdContext = React.createContext();

function App() {
  const [text, setText] = React.useState([{id: 1, parentText: 'test'}]);
  const [parentText, setParentText] = React.useState('');

  return (
    <div className="App">
      TODOフォーム
      <ChildIdContext.Provider value={100}>
        <ParentForm 
          text={text} 
          setText={setText} 
          parentText={parentText} 
          setParentText={setParentText}
        />
      </ChildIdContext.Provider>
    </div>
  );
}

export default App;
