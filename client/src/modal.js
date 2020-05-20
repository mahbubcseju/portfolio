import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/modal.css'

const modal = ({children}) => {
  return ReactDOM.createPortal (
    <div className="modal-wrapper">
        { children }
    </div>,
    document.querySelector("#modal")
  );
}

export default modal;