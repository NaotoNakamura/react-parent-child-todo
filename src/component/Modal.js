import React from 'react';

const Modal = ({isShow, targetText, setShowStatus, handleChange, targetCreate}) => {
  if (isShow) {
    return (
      <div id="overlay" onClick={() => setShowStatus(false)}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <p>入力フォーム</p>
          <input value={targetText} onChange={handleChange}></input>
          <button onClick={targetCreate}>追加</button>
          <button onClick={() => setShowStatus(false)}>Close</button>
        </div>
      </div >
    )
  } else {
    return null;
  }
}

export default Modal;
