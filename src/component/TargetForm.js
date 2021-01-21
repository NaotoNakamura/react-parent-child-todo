import React from 'react';
import TaskForm from './TaskForm';
import Modal from './Modal';

const TargetForm = ({ targets, targetText, handleChange, targetCreate, isShow, setShowStatus }) => {

  return (
    <div>
      <Modal isShow={isShow} targetText={targetText} setShowStatus={setShowStatus} handleChange={handleChange} targetCreate={targetCreate}/>
      {targets.map((item, i) => (
         <div key={i}>
          <p>{item.id} | {item.target_title}</p>
          <TaskForm parentId={item.id}/>
         </div>
      ))}
    </div>
  );
}

export default TargetForm;
