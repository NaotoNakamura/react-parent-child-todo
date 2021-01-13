import React from 'react';

const ChildForm = (props) => {

  return (
    <div>
      <input></input>
      <button>{props.parentId}の子追加</button>
    </div>
  );
}

export default ChildForm;
