import ParentForm from './component/ParentForm';
import Modal from './component/Modal';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import './App.css';
import { useTarget } from './component/useTarget';

function App() {
  const { text, parentText, handleChange, handleClick } = useTarget()
  const [isShow, setShowStatus] = React.useState(false)
  return (
    <div className="App">
      TODOフォーム
      <ParentForm text={text} parentText={parentText} handleChange={handleChange} handleClick={handleClick} />
      <AddCircleOutlineIcon onClick={() => setShowStatus(true)}/>
      <Modal isShow={isShow} setShowStatus={setShowStatus}/>
      
    </div>
  );
}

export default App;
