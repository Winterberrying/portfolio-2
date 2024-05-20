import React, { Suspense, useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Spline from '@splinetool/react-spline';
import Modal from '../components/Modal';
import { About } from '.';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsModalOpen(true);
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
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <About />
      </Modal>
    </div>
  )
}

export default Home
