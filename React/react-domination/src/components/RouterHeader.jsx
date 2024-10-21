import React from "react";
import { Link } from "react-router-dom";

const RouterHeader = () => {
  return (
    <div className="flex items-center justify-end gap-10 p-4 bg-sky-300 shadow-md">
      <input
        type="text"
        placeholder="Search..."
        className="text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* <a className="text-3xl underline mr-5" href="/">home</a>
      <a className="text-3xl underline mr-5" href="/about">About</a>
      <a className="text-3xl underline mr-5" href="/contact">Contact</a>
      <a className="text-3xl underline mr-5" href="/product">Products</a>
      If you're using regular <a> tags for navigation (as shown in your commented-out code), the browser treats them as traditional hyperlinks. Clicking an <a> tag will cause a full page reload because it navigates away from the current page to the new URL. */}

      <Link
        to="/"
        className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        Contact
      </Link>
      <Link
        to="/product"
        className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        Product
      </Link>

      {/* - Creates a navigation link to the home page (/) without reloading the page. */}
    </div>
  );
};

export default RouterHeader;
