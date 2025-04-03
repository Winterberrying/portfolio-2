import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

ReactModal.setAppElement('#root'); // Ensure accessibility

const Modal = ({ isOpen, onRequestClose, children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width to suit your needs
    };

    // Initial check
    checkIfMobile();

    // Event listener to handle window resizing
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleClick = () => {
    onRequestClose(); // Handle click event
  };

  const handlePointerEnter = () => {
    if (!isMobile) {
      onRequestClose(); // Handle pointer enter for web
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
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
          position: 'relative', // Ensure positioning is relative to the modal content
          overflow: 'hidden', // Hide scrollbar on modal content
        },
      }}
    >
      {/* Close Button */}
      <button
        onClick={handleClick} // Handle click on both mobile and web
        onPointerEnter={handlePointerEnter} // Handle pointer enter only on web
        style={{
          position: 'absolute', // Absolute positioning inside the modal
          right: '40px', // Position the button at the right end
          top: '40px', // Adjust this value as needed
          cursor: 'pointer', // Ensure it's clickable
          touchAction: 'manipulation', // Prevent default scrolling behavior on mobile
          zIndex: 50, // Ensure it stays on top
        }}
      >
        <AiOutlineClose size={24} />
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
