import React from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <>
      {/* Top header */}
      <div className="fixed top-0 z-50 overflow-hidden w-full">
        <div className="bg-gray-800 h-16 flex justify-center">
          <div className="flex items-center h-full w-4/5 justify-between">
            <div className="">
              <img className="w-32" src="/Hvitnetshop.png" alt="" />
            </div>
            {/* Søkefelt */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="search..."
                className=" bg-white box-border h-9 w-96 border-2 border-white rounded-md text-gray-600 pl-1  hover:border-gray-400 capitalize"
              />
              <AiOutlineSearch className="text-gray-800 text-2xl absolute right-2" />
            </div>
            <div className="">
              <AiOutlineUser className="text-white w-7 h-7 ml-18" />
            </div>
          </div>
        </div>
        {/* Bottom header */}
        <div className="bg-gray-900 opacity-80 h-11 flex">
          <div className="flex justify-around w-96 text-white self-center ml-36 pl-1 font-sans">
            <a href="/">Home</a>
            <a href="/Shop">Shop</a>
            <a href="/Liked">Liked</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
