import React from "react";
import { Animation } from "../services/redirect";
const IntroAnimation = () => {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center z-50 ">
      <div className="w-[50%] h-full flex  flex-col items-center justify-center bg-[var(--color-main)] p-5">
        <div className="w-full h-[15%]  flex justify-end  pr-7 anime">
          <img
            src="/src/assets/images/Pokemon - 1.png"
            alt=""
            className="w-50 bird"
          />
        </div>
        <div className="w-[70%] h-[60%] flex flex-col items-start justify-start  ">
          <div className="h-[20%] w-full  flex justify-center items-end ">
            <img
              src="/src/assets/images/Welcome-to-Pok-dex-3-4-2025 1.png "
              alt=""
              className="anime"
            />
          </div>
          <div className="h-[60%] w-full flex justify-center items-center">
            <div className="w-70 h-70 bg-yellow-200 rounded-full flex justify-center items-center anime">
              <img
                src="/src/assets/images/ash.png"
                alt="ash"
                className="ash w-40"
              />
            </div>
          </div>
          <div className="h-[20%] w-full  flex justify-center items-start ">
            <img
              src="/src/assets/images/Encyclopedia-of-Pok-mon-3-4-2025 1.png"
              alt=""
              className="anime"
            />
          </div>
        </div>
      </div>

      <div className="w-[50%] h-full bg-yellow-200 flex justify-center items-center">
        <div className="w-[75%] h-[70%] bg-emerald-300">
          <div className="w-full h-[80%]"></div>
          <div className="w-full h-[20%] bg-amber-400 flex flex-col justify-center items-center ">
            <button
              id="start-btn"
              class="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-bold tracking-wider transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-900/50"
            >
              DÉMARRER
            </button>

            <div class="mt-8 text-xs text-gray-400 animate-pulse">
              Appuyez sur Démarrer pour commencer votre aventure Pokémon!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
