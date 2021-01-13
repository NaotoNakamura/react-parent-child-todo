import React from 'react';
import ChildForm from './ChildForm';

const ParentForm = () => {
  const [text, setText] = React.useState([{id: 1, parentText: 'test'}]);
  const [parentText, setParentText] = React.useState('');

  const handleChange = e => {setParentText(e.target.value)}
  const handleClick = () => {
    setText([...text, {
      parentText: parentText,
    }])
    setParentText('')
  }

  return (
    <div>
      <input value={parentText} onChange={handleChange}></input>
      <button onClick={handleClick}>親追加</button>
      {text.map((item, i) => (
         <div key={i}>
          <li>
          <b>親ID{item.id}：親タスク名{item.parentText}</b>
          <ChildForm/>
          </li>
         </div>
      ))}
    </div>
  );
}

export default ParentForm;
