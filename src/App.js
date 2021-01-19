import ParentForm from './component/ParentForm';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import './App.css';
import { useTarget } from './component/useTarget';

function App() {
  const { text, parentText, handleChange, handleClick } = useTarget()
  const [isShow, setShowStatus] = React.useState(false)
  return (
    <div className="App">
      TODOフォーム<AddCircleOutlineIcon onClick={() => setShowStatus(true)}/>
      <ParentForm text={text} parentText={parentText} handleChange={handleChange} handleClick={handleClick} isShow={isShow} setShowStatus={setShowStatus}/>
    </div>
  );
}

export default App;
