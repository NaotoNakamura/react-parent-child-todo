import React from 'react';

const Modal = ({isShow, setShowStatus}) => {
  if (isShow) {
    return (
      <div id="overlay" onClick={() => setShowStatus(false)}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <p>モーダル</p>
          <button onClick={() => setShowStatus(false)}>Close</button>
        </div>
      </div >
    )
  } else {
    return null;
  }
}

export default Modal;
