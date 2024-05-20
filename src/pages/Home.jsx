import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import SplineViewer from '../components/SplineViewer'
import { Link } from 'react-router-dom'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {

  return (
    <div>
      <section className='w-full h-screen relative'>
        <Suspense fallback={<Loader />}>
          <SplineViewer />
        </Suspense>
        {/* <Link to="/about" className="absolute top-4 left-4 text-black text-xl z-10">About</Link> */}
      </section>
    </div>
  )
}

export default Home
