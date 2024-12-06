import React, { useEffect, useState } from "react";

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="eyes w-full h-screen overflow-hidden">
            <div 
                data-scroll data-scroll-speed="-.7"
                className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    {/* Left Eye */}
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div  className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">
                            <span id="tt" className="absolute text-2xl  text-white">play</span>
                            <div 
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                                className="line w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-10"
                            >
                                <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Eye */}
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div  className="relative w-2/3 h-2/3 rounded-full  bg-zinc-900 flex items-center justify-center">
                            <span id="tt" className="absolute text-2xl text-white">play</span>
                            <div 
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                                className="line w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-10"
                            >
                                <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
