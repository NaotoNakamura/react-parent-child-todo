import TargetForm from './component/TargetForm';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import './App.css';
import { useTarget } from './component/useTarget';

function App() {
  const { targets, targetText, handleChange, targetCreate } = useTarget()
  const [isShow, setShowStatus] = React.useState(false)
  return (
    <div className="App">
      TODOフォーム<AddCircleOutlineIcon onClick={() => setShowStatus(true)}/>
      <TargetForm targets={targets} targetText={targetText} handleChange={handleChange} targetCreate={targetCreate} isShow={isShow} setShowStatus={setShowStatus}/>
    </div>
  );
}

export default App;
