import React from "react";

const About = () => {
  return (
    <div className="w-full  p-20 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-[4vw] leading-[4vw] font-[Neue_Montreal] tracking-tight  text-zinc-950 ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl text-black">Our approach : </h1>
          <button className=" flex items-center gap-5 px-8 mt-10 py-4 rounded-full bg-zinc-900 text-white">
            Read More
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-3xl  ">
          <img className="rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
