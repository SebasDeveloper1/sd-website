import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ImageButton } from 'components/indexComponents';
import { EventContext } from 'context/EventContext';
import './Modal.scss';

export function Modal({ children, modifierClass }) {
  const { handleModal, handleModalDown } = useContext(EventContext);
  return ReactDOM.createPortal(
    <div
      className={
        modifierClass ? `modal-container ${modifierClass}` : 'modal-container'
      }
    >
      <div className="modal-content">
        <ImageButton
          type="button"
          modifierClass="modal-container__close-btn"
          typeIcon="FontAwesomeIcon"
          srcIcon={faClose}
          altIcon="Go to start"
          onClick={handleModal}
          onKeyDown={handleModalDown}
        />
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}
