import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text-structure mt-52 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[1.2vw]"
                  style={{
                    backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
              <h1 id="ts" className={`uppercase flex items-center text-[9vw] h-full leading-[7vw] font-bold shadow-${index + 1}`}>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] flex gap-10 border-zinc-800 mt-20 justify-between py-5 px-20">
        {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className={`text-md font-light tracking-tight leading-none shadow-${index + 1}`}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <button
            id="specialButton"
            className="relative flex items-center justify-center px-5 py-2 rounded-full border-[2px] font-light hover:font-semibold text-md uppercase border-zinc-500 overflow-hidden group"
          > 
            <span className="button-text hover:font-semibold">Start the Project</span>
            <div className="h-10 w-10 flex items-center hover:font-semibold rounded-full justify-center border-zinc-200 border-[1px] ml-2">
              <span className="rotate-45 arrow-icon">
                <FaArrowUpLong />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
  