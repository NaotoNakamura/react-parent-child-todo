import React from 'react';
import TaskForm from './TaskForm';
import Modal from './Modal';

const TargetForm = ({ text, parentText, handleChange, handleClick, isShow, setShowStatus }) => {

  return (
    <div>
      <Modal isShow={isShow} parentText={parentText} setShowStatus={setShowStatus} handleChange={handleChange} handleClick={handleClick}/>
      {text.map((item, i) => (
         <div key={i}>
          <p>{item.id} | {item.target_title}</p>
          <TaskForm parentId={item.id}/>
         </div>
      ))}
    </div>
  );
}

export default TargetForm;
