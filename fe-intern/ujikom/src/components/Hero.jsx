

import React from "react";

const Hero = () => {
  return (
    <div>
    <div>
    <div className="absolute flex justify-center items-center  w-full text-center bg-[#120C34]">
      <div className="font-poppins mt-14 text-white">
        <h1 className="text-5xl mb-4 font-semibold">
          Toys World
        </h1>
        <h2 className="text-4xl mb-4 font-extrabold">
        The First Online Toy Shop in Indonesia
        </h2>
        <div className="text-xl mb-4 font-normal">
         <p>Lets start sharing toys with those closest to you</p>
          <div>
          <button className="bg-[#2C3E89] text-white font-poppins py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out mt-8">
        Click Me
      </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;