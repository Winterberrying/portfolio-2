// src/SplineViewer.js
import React, { useEffect } from 'react';

const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.3.8/build/spline-viewer.js';
    document.body.appendChild(script);

    script.onload = () => {
      const viewer = document.querySelector('spline-viewer');

      // Add a click event listener to the viewer
      viewer.addEventListener('pointerdown', (event) => {
        console.log('Element clicked:', event.target.name);
        // Check if the clicked element is the desired one
        if (event.target.name === 'desired-element-name') {
          history.push('/about');
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [history]);


  return (
    <div>
      <spline-viewer url="https://prod.spline.design/QQIbkWyjcZPVN9L4/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default SplineViewer;