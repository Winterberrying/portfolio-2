import React, { Suspense, useState, useEffect, lazy, useRef } from 'react'
import Modal from '../components/Modal';
import { About, Contact } from '.';
import Loader from '../components/Loader';
import { AiOutlineClose } from "react-icons/ai";

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Home = () => {

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const inputRef = useRef(null);

  function returnHome() {
    setIsContactModalOpen(false);
    simulateKeyPress();
    console.log('Return Home');
  }

  const simulateKeyPress = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'F10',
      code: 'F10',
      keyCode: 121, // Note: keyCode is deprecated
      bubbles: true,
      cancelable: true
    });
    inputRef.current.dispatchEvent(event);
  };


  function onLoad(spline) {
    spline.current = spline;
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      // Mobile devices
      spline.setZoom(0.5);
    } else {
      // Desktop devices
      spline.setZoom(1);
    }
  }

  function onMouseDown(e) {
    if (e.target.name === 'shelf_simple') {
      console.log('Shelf has been clicked!');
      setTimeout(() => {
        setIsAboutModalOpen(true);
      }, 3000);
    }
    if (e.target.name === 'Mobile') {
      console.log('Mobile has been clicked!');
      setTimeout(() => {
        setIsContactModalOpen(true);
      }, 3000);
    }
  }

  return (
    <div>
      <section className='w-full h-screen relative'>
        <Suspense fallback={<Loader />}>
          <Spline 
            scene="https://prod.spline.design/QQIbkWyjcZPVN9L4/scene.splinecode"
            onMouseDown={onMouseDown}
            onLoad={onLoad}
          />
        </Suspense>
      </section>
      {/* <Modal isOpen={isAboutModalOpen} onRequestClose={() => setIsAboutModalOpen(false)}>
        <About />
      </Modal> */}
      <Modal 
        isOpen={isContactModalOpen} 
      >
        <button ref={inputRef} className='absolute top-0 right-0' onClick={returnHome}>
          <AiOutlineClose size={24}/>
        </button>
        <Contact />
      </Modal>
    </div>
  )
}

export default Home
