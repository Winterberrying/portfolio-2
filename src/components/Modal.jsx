import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // Ensure accessibility

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(225, 225, 225, 0.95)',
          border: 'none',
          borderRadius: '12px',
          padding: '24px',
          width: 'clamp(400px, 80vw, 1000px)', // Expands with window size
          height: 'clamp(300px, 80vh, 700px)', // Ensures it grows dynamically
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* This ensures that the content inside grows dynamically */}
      <div className="flex-grow overflow-y-auto min-h-0">
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
