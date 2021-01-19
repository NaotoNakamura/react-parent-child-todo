import React from 'react';

const Modal = ({isShow, parentText, setShowStatus, handleChange, handleClick}) => {
  if (isShow) {
    return (
      <div id="overlay" onClick={() => setShowStatus(false)}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <p>入力フォーム</p>
          <input value={parentText} onChange={handleChange}></input>
          <button onClick={handleClick}>追加</button>
          <button onClick={() => setShowStatus(false)}>Close</button>
        </div>
      </div >
    )
  } else {
    return null;
  }
}

export default Modal;
