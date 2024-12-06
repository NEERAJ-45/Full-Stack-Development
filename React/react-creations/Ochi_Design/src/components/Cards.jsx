import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex px-32 items-center gap-5">
      <div className="cardcontainer h-[50vh] w-1/2 flex flex-col gap-5">
        {/* Card 1 */}
        <div className="card1 relative w-full rounded-xl flex items-center justify-center h-full bg-[#004D43] transition-transform duration-300 transform hover:scale-105 hover:rotate-y-3 hover:rotate-x-3">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button
            id="copyright"
            className="absolute uppercase text-xs px-2 py-1 border-2 left-7 rounded-3xl bottom-6 text-[#CDEA68] border-[#CDEA68] text-nowrap"
          >
            &copy;2019–2022
          </button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        {/* Card 2 */}
        <div className="card2 relative w-1/2 h-full flex items-center justify-center rounded-xl bg-[#212121] transition-transform duration-300 transform hover:scale-105 hover:rotate-y-3 hover:rotate-x-3">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button
            className="absolute uppercase text-xs px-5 py-1 border-2 left-4 rounded-3xl bottom-6 text-nowrap"
            id="rating"
          >
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        {/* Card 3 */}
        <div className="card3 relative w-1/2 h-full flex items-center justify-center rounded-xl bg-[#212121] transition-transform duration-300 transform hover:scale-105 hover:rotate-y-3 hover:rotate-x-3">
          <img
            className="w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button
            className="absolute uppercase text-xs px-1 py-1 border-2 left-2 rounded-3xl bottom-6 text-nowrap"
            id="rating"
          >
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
