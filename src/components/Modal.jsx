// src/components/Modal.js
import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // Ensure accessibility

const Modal = ({ isOpen, children }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      // onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(225, 225, 225, 0.95)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent',
          border: 'none',
        },
      }}
    >
      <div className="max-h-[calc(100vh-210px)] overflow-y-auto z-0" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
