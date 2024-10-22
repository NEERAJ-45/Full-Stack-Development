import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 gap-10 flex overflow-hidden whitespace-nowrap border-zinc-300">
        <h1 id="ts"  className=" text-[22vw]  pt-5 uppercase -mb-[9.2vh] leading-none font-semibold  ">We are Ochi</h1>
        <h1 id="ts"  className="text-[22vw]  pt-5 uppercase -mb-[9.2vh] leading-none font-semibold  ">We are Ochi</h1>
      </div>
    </div>
  );
};

export default Marquee;
