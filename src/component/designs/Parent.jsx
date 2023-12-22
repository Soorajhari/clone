import React from "react";
import Basics from "./Basics";
import Standard from "./Standard";
import Premium from "./Premium";
import Free from "./Free";
import Enterprise from "./Enterprise";

const Parent = () => {
  return (
    <div className="bg-[#ffff] w-screen h-[2300px] lg:h-[1200px]  md:w-[1649px] 2xl:h-[844px] block  xl:flex justify-between  rounded-md relative">
      <div className=" mt-3 lg:mt-10 ml-10">
        <p className="text-bold font-bold text-lg md:mt-0 lg:text-3xl ">Choose a plan that just right for you !</p>
      </div>
      <div className="p-2 mt-10 mr-10 lg:ml-7 shadow-lg w-[150px] lg:w-[250px] h-[40px] border border-black flex rounded-full items-center justify-center gap-x-3 lg:gap-x-9">
        <button className="bg-blue-300 p-1  text-xs lg:text-xl rounded-full h-[30px] w-[100px]">
          Monthly
        </button>
        <div className="flex ">
          <button className="text-xs lg:text-xl">Annually</button>
          <p className="text-green-400 text-xs mb-2">-10%</p>
        </div>
      </div>
      <div className="block lg:flex  absolute left-7 md:left-12 md:top-32 gap-x-8 xl:gap-x-16 2xl:gap-x-40">
        <div>
          <Basics />
        </div>
        <div>
          <Standard />
        </div>
        <div>
          <Premium />
        </div>
      </div>
         
         <div className="absolute top-[1200px] left-0   md:left-7 lg:top-[500px]   2xl:top-[500px] block 2xl:flex gap-x-20 ml-10">
         <Free/>
        <Enterprise/>
         </div>

    </div>
  );
};

export default Parent;
