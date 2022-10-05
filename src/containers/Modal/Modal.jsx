import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

export function Modal({ children, modifierClass }) {
  return ReactDOM.createPortal(
    <div
      className={
        modifierClass ? `modal-container ${modifierClass}` : 'modal-container'
      }
    >
      {children}
    </div>,
    document.getElementById('modal')
  );
}
