import React from "react";
import { Animation } from "../services/redirect";
const IntroAnimation = () => {
  return (
    <div
      className="w-screen h-screen flex flex-row items-center justify-center z-50"
      style={{ backgroundImage: "" }}
    >
      <div className="w-[60%] h-full flex justify-center items-center bg-amber-300">
        <div className="w-[70%] h-[70%] flex flex-col items-center justify-center bg-amber-100  ">
          <div className="h-[40%] w-full bg-blue-400">
            <img src="/src/assets/images/Welcome-to-Pok-dex-3-4-2025 1.png" alt="" />
          </div>
            <div className="text-white text-6xl font-bold animate-fade-in-rotate titre h-[20%] w-full flex justify-center items-center">
            <img src="/src/assets/images/pokeball 1.png" alt="Pokeball" className='pokeball' />
          </div> 
          <div className="h-[40%] w-full flex justify-center items-center bg-blue-700">
            <img src="/src/assets/images/Encyclopedia-of-Pok-mon-3-4-2025 1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full bg-blue-400">
      hello
      </div>
    </div>
  );
};

export default IntroAnimation;
