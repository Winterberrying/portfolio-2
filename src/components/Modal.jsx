// src/components/Modal.js
import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // Ensure accessibility

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
