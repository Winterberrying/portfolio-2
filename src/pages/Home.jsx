import React, { Suspense, useState, useEffect, lazy, useRef } from 'react'
import Modal from '../components/Modal';
import { About, Contact, Hobbies, People } from '.';
import Loader from '../components/Loader';
import { AiOutlineClose } from "react-icons/ai";
import Navbar from '../components/Navbar';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Home = () => {

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHobbyModalOpen, setIsHobbyModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const splineObject = useRef();

  function closeModals() {
    setIsAboutModalOpen(false);
    setIsContactModalOpen(false);
    setIsHobbyModalOpen(false);
    setIsPhotoModalOpen(false);
  }

  function closeContactModal() {
    setIsContactModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'Mobile');
    console.log('Return Home');
  }

  function closeAboutModal() {
    setIsAboutModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'shelf_simple');
    console.log('Return Home');
  }

  function closeHobbyModal() {
    setIsHobbyModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'Guitar');
    console.log('Return Home');
  }

  function closePhotoModal() {
    setIsPhotoModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'photo-2');
    console.log('Return Home');
  }

  function openAboutModal() {
    closeModals();
    setIsAboutModalOpen(true);
  }

  function openContactModal() {
    closeModals();
    setIsContactModalOpen(true);
  }

  function openHobbyModal() {
    closeModals();
    setIsHobbyModalOpen(true);
  }

  function openPhotoModal() {
    closeModals();
    setIsPhotoModalOpen(true);
  }

  function onLoad(spline) {
    splineObject.current = spline;
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
      }, 3100);
    }
    if (e.target.name === 'Mobile') {
      console.log('Mobile has been clicked!');
      setTimeout(() => {
        setIsContactModalOpen(true);
      }, 3000);
    }
    if (e.target.name === 'Guitar') {
      console.log('Guitar has been clicked!');
      setTimeout(() => {
        setIsHobbyModalOpen(true);
      }, 3000);
    }
    if (e.target.name === 'photo-2') {
      console.log('Photo has been clicked!');
      setTimeout(() => {
        setIsPhotoModalOpen(true);
      }, 3000);
    }
  }

  return (
    <div>
      <Navbar openAboutModal={openAboutModal} openContactModal={openContactModal} openHobbyModal={openHobbyModal} openPeopleModal={openPhotoModal} />
      <section className='w-full h-screen relative'>
        <Suspense fallback={<Loader />}>
          <Spline 
            scene="https://prod.spline.design/QQIbkWyjcZPVN9L4/scene.splinecode"
            onMouseDown={onMouseDown}
            onLoad={onLoad}
          />
        </Suspense>
      </section>
      <Modal isOpen={isAboutModalOpen}>
        <div className='flex flex-col h-full m-4 md:m-16 lg:m-56'>
          <div className="flex justify-end">
            <button className='' onClick={closeAboutModal}>
              <AiOutlineClose size={24}/>
            </button>
          </div>
          <About />
        </div>
      </Modal>
      <Modal isOpen={isContactModalOpen}>
        <div className='flex flex-col h-full'>
          <div className="flex justify-end">
            <button className='' onClick={closeContactModal}>
              <AiOutlineClose size={24}/>
            </button>
          </div>
        </div>
        <Contact />
      </Modal>
      <Modal isOpen={isHobbyModalOpen}>
        <div className='flex flex-col h-full'>
          <div className="flex justify-end">
            <button className='' onClick={closeHobbyModal}>
              <AiOutlineClose size={24}/>
            </button>
          </div>
        </div>
        <Hobbies />
      </Modal>
      <Modal isOpen={isPhotoModalOpen}>
        <div className='flex flex-col h-full'>
          <div className="flex justify-end">
            <button className='' onClick={closePhotoModal}>
              <AiOutlineClose size={24}/>
            </button>
          </div>
        </div>
        <People />
      </Modal>
    </div>
  )
}

export default Home
