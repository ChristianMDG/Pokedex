import  React  from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const IntroAnimation = () => {
  const navigate = useNavigate();
  const startBtnRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };
  return (
    <div className="w-screen h-screen flex md:flex-row flex-col items-center justify-center z-50  mt-4 md:mt-0">
      <div className="md:w-[50%] w-full md:h-full h-screen flex  flex-col items-center justify-center md:p-5">
        <div className="w-full h-[15%]  flex justify-end  md:pr-7 anime">
          <img
            src="/src/assets/images/Pokemon - 1.png"
            alt=""
            className="w-50 bird"
          />
        </div>
        <div className="md:w-[70%] w-full md:h-[60%] flex flex-col items-start justify-start  ">
          <div className="h-[20%] w-full  flex justify-center items-end anime ">
            <img
              src="/src/assets/images/Welcome-to-Pok-dex-3-4-2025 1.png "
              alt=""
              className=""
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
          <div className="h-[20%] w-full  flex justify-center items- anime ">
            <img
              src="/src/assets/images/Encyclopedia-of-Pok-mon-3-4-2025 1.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>

      <div className="md:w-[50%] w-full h-full bg-yellow-200 flex justify-center items-center">
        <div className="w-[75%] h-[70%] flex flex-col gap-2 ">
          <div className="w-full h-[80%] p-5 py-7 flex justify-center items-center">
            {/* <div className="w-70 h-70 rounded-full bg-yellow-50 flex justify-center items-center"> */}
            <img
              src="/src/assets/images/Pok-dex-3-4-2025 1.svg"
              alt="pokedex"
              className="ash"
            />
            {/* </div> */}
          </div>
          <div className="w-full h-[20%] flex flex-col justify-center items-center ">
            <button
              id="start-btn"
              ref={startBtnRef}
              onClick={handleStart}
              className={`px-15 py-3 rounded-full font-bold text-style tracking-wider transform transition-all duration-300 shadow-lg
          ${
            isLoading
              ? "bg-yellow-400 text-black"
              : "bg-yellow-300 hover:bg-yellow-100 shadow-red-900/50"
          }
        `}
              disabled={isLoading}
            >
              {isLoading ? (
                <img
                  src="/src/assets/images/pokeball 1.svg"
                  alt=""
                  className="pokeball-loader mx-6"
                />
              ) : (
                "Go Start!"
              )}
            </button>

            <div class="mt-8 text-xm text-black animate-pulse md:block hidden">
              Press Start key to begin your Pokemon Adventure !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
