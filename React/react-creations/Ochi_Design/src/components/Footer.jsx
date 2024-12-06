import React from "react";

function Footer() {
  return (
    <div id="ts" className="w-full  pb-16   flex gap-5 bg-zinc-900">
      <div className="w-1/2 flex flex-col h-full justify-between p-20 text-9xl ">
        <div className="heading -mt-[18vh] mb-[5vh]">
          <h1 className="text-[6vw] uppercase leading-none -mb-[3vh]">Eye-</h1>
          <h1 className="text-[6vw] uppercase leading-none mb-8">Opening</h1>
        </div>

        <svg
          className=""
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths omitted for brevity */}
        </svg>
      </div>
      <div className="w-1/2 -mt-[6vh]">
        <h1 className="text-[8vw] uppercase leading-none">Presentations</h1>

        <div className="cont-gparent flex gap-56">
          <div className="cont-parent ">
            <div className="dets font-['Neue_Montreal'] " id="tt">
              <a className="block text-xl font-light social-link" href="#">
                Instagram
              </a>
              <a className="block text-xl font-light social-link" href="#">
                Behance
              </a>
              <a className="block text-xl font-light social-link" href="#">
                Facebook
              </a>
              <a className="block text-xl font-light social-link" href="#">
                LinkedIn
              </a>
            </div>
            <div className="dets font-['Neue_Montreal'] mt-8" id="tt">
              <p className="text-lg font-light">L:</p>
              <p className="text-lg font-light">
                202-1965 W 4th Ave
                <br />
                Vancouver, Canada
              </p>
              <p className="text-lg font-light mt-4">
                30 Chukarina St
                <br />
                Lviv, Ukraine
              </p>
            </div>
            <div className="dets font-['Neue_Montreal'] mt-8" id="tt">
              <p className="text-lg font-light">E:</p>
              <a className="text-lg font-light" href="mailto:hello@ochi.design">
                hello@ochi.design
              </a>
            </div>
          </div>
          <div className="dets font-['Neue_Montreal'] mt-18" id="tt">
            <a className="block text-xl font-light" href="#">
              Home
            </a>
            <a className="block text-xl font-light" href="#">
              Services
            </a>
            <a className="block text-xl font-light" href="#">
              Our work
            </a>
            <a className="block text-xl font-light" href="#">
              About us
            </a>
            <br />
            <br />
            <a className="block text-xl font-light" href="#">
              Insights
            </a>
            <a className="block text-xl font-light" href="#">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
