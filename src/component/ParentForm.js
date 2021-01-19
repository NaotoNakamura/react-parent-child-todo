import React from 'react';
import ChildForm from './ChildForm';
import Modal from './Modal';

const ParentForm = ({ text, parentText, handleChange, handleClick, isShow, setShowStatus }) => {

  return (
    <div>
      <Modal isShow={isShow} parentText={parentText} setShowStatus={setShowStatus} handleChange={handleChange} handleClick={handleClick}/>
      {text.map((item, i) => (
         <div key={i}>
          <p>{item.id} | {item.target_title}</p>
          <ChildForm parentId={item.id}/>
         </div>
      ))}
    </div>
  );
}

export default ParentForm;
