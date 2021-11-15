import React from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
/* import { Component } from "react"; */
/* import Content from "./Components/Content";
import Shop from "./Components/Shop";
import liked from "./Components/liked";
 */
const Header = () => {
  return (
    <>
      {/* Top header */}
      <div className="fixed top-0 z-50 overflow-hidden w-full">
        <div className="bg-gray-800 h-16">
          <div className="flex items-center h-full w-4/5 mx-auto justify-between">
            <Link
              to="/"
              className="transition transform duration-300 ease-out hover:scale-110"
            >
              <img className="w-32" src="/Hvitnetshop.png" alt="" />
            </Link>
            {/* Søkefelt */}
            <div className="relative flex items-center transition transform duration-300 ease-out hover:scale-105 ">
              <input
                type="text"
                placeholder="search..."
                className="border-2 border-white bg-white h-9 w-96 rounded-md text-gray-600 pl-1 capitalize outline-none focus:border-green-600"
              />
              <AiOutlineSearch className="text-gray-800 text-2xl absolute right-2" />
            </div>
            <div className="">
              <AiOutlineUser className="text-white w-7 h-7 ml-18 transition transform duration-300 ease-out hover:scale-110" />
            </div>
          </div>
        </div>
        {/* Bottom header */}
        <div className="bg-gray-900 opacity-80 h-11 flex">
          <div className="flex mx-auto w-4/5 text-white self-center space-x-20">
            <Link
              to="/"
              className="transition transform duration-300 ease-out hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="transition transform duration-300 ease-out hover:scale-110"
            >
              Shop
            </Link>
            <Link
              to="/liked"
              className="transition transform duration-300 ease-out hover:scale-110"
            >
              Liked
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
