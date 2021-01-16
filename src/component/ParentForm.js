import React from 'react';
import ChildForm from './ChildForm';

const ParentForm = () => {
  const target = {
    "id" : 1,
    "target_title" : "親タイトルテスト",
    "tasks" : [
        {
          "id": 1,
          "text": "child",
          "period_kind": "DAY",
          "start_date": "2021/1/11",
          "end_date": "2021/1/12",
          "isDone": false 
        }
    ]
  }

  const [text, setText] = React.useState([target]);
  const [parentText, setParentText] = React.useState('');

  const handleChange = e => {setParentText(e.target.value)}
  const handleClick = () => {
    setText([...text, {
      target_title: parentText,
    }])
    setParentText('')
  }

  return (
    <div>
      <input value={parentText} onChange={handleChange}></input>
      <button onClick={handleClick}>親追加</button>
      {text.map((item, i) => (
         <div key={i}>
          <p>親ID{item.id}</p>
          <p>親タスク名{item.target_title}</p>
          <ChildForm parentId={item.id}/>
         </div>
      ))}
    </div>
  );
}

export default ParentForm;
