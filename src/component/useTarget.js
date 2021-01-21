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

  const [targets, setTarget] = React.useState([target])
  const [targetText, setTargetText] = React.useState('')

  const handleChange = e => {setTargetText(e.target.value)}
  const targetCreate = () => {
    setTarget([...targets, {
      target_title: targetText,
    }])
    setTargetText('')
  }
  return {targets, targetText, handleChange, targetCreate};
}