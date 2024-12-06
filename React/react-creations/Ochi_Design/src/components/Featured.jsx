import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-[Neue_Montreal] tracking-tight" id="tt">
          Featured Projects
        </h1>
      </div>
      <div>
        <div className="px-20">
          <div className="cards w-full flex mt-10 gap-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="card-container relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tn flex text-nowrap text-7xl font-semibold leading-none tracking-tighter text-[#CDEA68] overflow-hidden">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    key={`card1-${index}`}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [], delay: index * 0.054 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                />
              </div>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="card-container relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[999] tn flex text-nowrap text-7xl font-semibold leading-none tracking-tighter overflow-hidden  text-[#CDEA68]">
                {/* "PREMIUM" Word Animation */}
                {"PREMIUM".split("").map((item, index) => (
                  <motion.span
                    key={`premium-${index}`}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [], delay: index * 0.054 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}

                {/* Space between words */}
                <motion.span className="inline-block mx-2"> </motion.span>

                {/* "BLEND" Word Animation */}
                {"BLEND".split("").map((item, index) => (
                  <motion.span
                    key={`blend-${index}`}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      delay: (index + 7) * 0.054,
                    }} // offset delay to continue smoothly after "PREMIUM"
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
