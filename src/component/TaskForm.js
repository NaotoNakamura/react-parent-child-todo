import React from 'react';

const TaskForm = (props) => {
  const [tasks, setTask] = React.useState([])
  const [taskText, setTaskText] = React.useState('')

  const handleChange = e => {setTaskText(e.target.value)}
  const handleClick = () => {
    setTask([...tasks, {
      text: taskText,
    }])
    setTaskText('')
  }

  return (
    <div>
      <input value={taskText} onChange={handleChange}></input>
      <button onClick={handleClick}>{props.parentId}の子追加</button>
      {tasks.map((item, i) => (
         <div key={i}>
            {item.text}
         </div>
      ))}
    </div>
  );
}

export default TaskForm;
