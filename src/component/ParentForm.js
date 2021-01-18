import React from 'react';
import ChildForm from './ChildForm';

const ParentForm = ({ text, parentText, handleChange, handleClick }) => {

  return (
    <div>
      <input value={parentText} onChange={handleChange}></input>
      <button onClick={handleClick}>親追加</button>
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
