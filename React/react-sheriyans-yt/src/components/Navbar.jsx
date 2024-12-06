import React from "react";
import Navbar2 from "./Navbar-2";
const Navbar = () => {
  return (
    <nav className="flex py-5 px-10 bg-slate-600   items-center justify-between">
      <h2 className="2xl">NSCodes</h2>
      <Navbar2/>
    </nav>
  );
};

export default Navbar;
