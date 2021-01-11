import React from 'react';

const ParentForm = (props) => {
  const handleChange = e => {props.setParentText(e.target.value)}
  const handleClick = () => {
    props.setText([...props.text, {
      parentText: props.parentText,
    }])
    props.setParentText('')
  }

  return (
    <div>
      <input value={props.parentText} onChange={handleChange}></input>
      <button onClick={handleClick}>親追加</button>
      {props.text.map((item, i) => (
         <div key={i}>
          <li>
          <b>{item.parentText}</b>
          <input></input>
          <button>子追加</button>
          </li>
         </div>
      ))}
    </div>
  );
}

export default ParentForm;
