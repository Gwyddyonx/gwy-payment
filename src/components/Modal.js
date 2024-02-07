import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className='model-content'>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
