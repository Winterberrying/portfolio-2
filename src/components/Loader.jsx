import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 10; // Increment progress by 10
        return nextProgress >= 100 ? 100 : nextProgress; // Cap progress at 100
      });
    }, 2000); // Update every xxxms (adjust to control speed)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="w-2/4 bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-300 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-white">{progress}%</p>
    </div>
  );
};

export default Loader;
