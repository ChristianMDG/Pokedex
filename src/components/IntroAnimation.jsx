
import React from 'react';

const IntroAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 ">
      <div className='w-screen h-90 bg-red flex justify-center items-center'>
         <div className='w-80 h-80 bg-amber-300 flex items-center justify-center rounded-full'>
        <div className="text-white text-6xl font-bold animate-fade-in-rotate titre">
        Pokédex
      </div>
      </div>
      </div>
     
      
      <div
        className="absolute inset-0 bg-pokedex-gray animate-fade-out"
      />
    </div>
  );
};

export default IntroAnimation;