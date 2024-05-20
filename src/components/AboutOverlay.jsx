// src/components/AboutOverlay.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const AboutOverlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black bg-opacity-70">
      <div className="text-white text-center p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Welcome to our application! Here we use cutting-edge technology to visualize data in 3D. Our mission is to provide intuitive and interactive experiences for our users. Stay tuned for more updates!</p>
      </div>
      <Link to="/" className="absolute top-4 right-4 text-black text-xl">Close</Link>
    </div>
  );
};

export default AboutOverlay;
