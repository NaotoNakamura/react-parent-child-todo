import React from 'react';

export const useTarget = () => {
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

  const [text, setText] = React.useState([target])
  const [parentText, setParentText] = React.useState('')

  const handleChange = e => {setParentText(e.target.value)}
  const handleClick = () => {
    setText([...text, {
      target_title: parentText,
    }])
    setParentText('')
  }
  return {text, parentText, handleChange, handleClick};
}