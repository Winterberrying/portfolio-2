import React, { Suspense, useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Spline from '@splinetool/react-spline';
import Modal from '../components/Modal';
import { About, Contact } from '.';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  function onLoad(spline) {
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
      <Modal isOpen={isAboutModalOpen} onRequestClose={() => setIsAboutModalOpen(false)}>
        <About />
      </Modal>
      <Modal isOpen={isContactModalOpen} onRequestClose={() => setIsContactModalOpen(false)}>
        <Contact />
      </Modal>
    </div>
  )
}

export default Home
