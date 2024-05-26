import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loader;
