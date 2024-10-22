import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text-structure mt-52 px-20">
        {['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex">
              {index === 1 && (
                <div className="mr-[1vw] w-[8vw]  rounded-md h-[5.7vw] relative -top-[1.2vw] bg-green-500" />
              )}
              <h1 id="ts" className="uppercase  flex items-center text-[9vw] h-full leading-[7vw] font-bold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] flex gap-10 border-zinc-800 mt-20 justify-between py-5 px-20">
        {[
          'For Public and Private Companies',
          'From the first pitch to IPO',
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-2">
          <button className="px-5 py-2 rounded-full border-[2px] font-light text-md uppercase border-zinc-500">
            Start the Project
          </button>
          <div className="h-10 w-10 rounded-full flex items-center justify-center border-zinc-200 border-[1px]">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;