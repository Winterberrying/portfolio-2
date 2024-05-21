import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="loader animate-spin89345 border-4 border-gray-200 border-t-transparent rounded-full w-9 h-9"></div>
    </div>
  );
};

export default Loader;
