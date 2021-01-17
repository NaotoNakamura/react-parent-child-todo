import React from 'react';

const ChildForm = (props) => {
  const [text, setText] = React.useState([])
  const [childText, setChildText] = React.useState('')

  const handleChange = e => {setChildText(e.target.value)}
  const handleClick = () => {
    setText([...text, {
      childText: childText,
    }])
    setChildText('')
  }

  return (
    <div>
      <input value={childText} onChange={handleChange}></input>
      <button onClick={handleClick}>{props.parentId}の子追加</button>
      {text.map((item, i) => (
         <div key={i}>
            {item.childText}
         </div>
      ))}
    </div>
  );
}

export default ChildForm;
