import React from 'react';
import loading from './image.png'; // Ensure you have a loading.gif file in the same folder

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" style={{ width: '50px', margin: '20px auto' }} />
    </div>
  );
};

export default Spinner;