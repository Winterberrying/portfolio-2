// src/SplineViewer.js
import React, { useEffect } from 'react';

const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.3.8/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <spline-viewer url="https://prod.spline.design/QQIbkWyjcZPVN9L4/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default SplineViewer;
