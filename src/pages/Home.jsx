import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import SplineViewer from '../components/SplineViewer'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {

  return (
    <div>
      <section className='w-full h-screen relative'>
        <SplineViewer />
      </section>
    </div>
  )
}

export default Home
