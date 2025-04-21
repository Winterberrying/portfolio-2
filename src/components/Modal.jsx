import React from 'react';
import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

ReactModal.setAppElement('#root'); // Ensure accessibility

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose} // Ensure modal can close when background is clicked
      shouldCloseOnOverlayClick={true} // Ensure overlay click works
      shouldCloseOnEsc={true} // Allow closing via ESC key
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 50
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
          width: 'clamp(280px, 80vw, 1000px)', // Smaller minimum width for mobile
          height: 'clamp(200px, 75vh, 700px)', // Smaller minimum height for mobile
          display: 'flex',
          flexDirection: 'column',
          position: 'relative', // Ensure positioning is relative to the modal content
          overflow: 'hidden', // Hide scrollbar on modal content
          zIndex: 50
        },
      }}
    >
      {/* Close Button */}
      <button
        onClick={onRequestClose} // Handle click
        onTouchStart={onRequestClose} // Ensures it works on touch devices
        role="button"
        aria-label="Close Modal"
        style={{
          position: 'absolute', // Absolute positioning inside the modal
          right: '20px', // Adjust for smaller screens
          top: '20px', // Adjust for smaller screens
          cursor: 'pointer', // Ensure it's clickable
          touchAction: 'manipulation', // Prevent default scrolling behavior on mobile
          zIndex: 100, // Ensure it stays on top
        }}
      >
        <AiOutlineClose size={20} />
      </button>

      {/* Modal Content */}
      <div
        className="flex-grow overflow-y-auto min-h-0"
        style={{
          overflowY: 'auto', // Enable scrolling for content
          paddingRight: '10px', // Add some padding to compensate for hidden scrollbar
        }}
      >
        {children}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        /* Hide scrollbar in webkit-based browsers */
        .flex-grow::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </ReactModal>
  );
};

export default Modal;