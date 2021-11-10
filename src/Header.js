import React from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <>
      <div className="bg-gray-800 h-16 sticky top-0 z-50 flex items-center justify-center">
        <div>
          <img className="w-32" src="/Hvitnetshop.png" alt="" />
          <AiOutlineUser className="text-white m-4 w-32" />
        </div>

        <span className="flex-wrap">
          <AiOutlineSearch className="text-black m-4 text-4xl" />
          <input
            type="text"
            placeholder="search..."
            className=" bg-white absolute inset-y-3.5 box-border h-9 w-96 border-2 border-white rounded-md text-gray-600 pl-1  hover:border-gray-400 capitalize"
          />
        </span>
      </div>
      <div className="bg-gray-900 opacity-80 h-11 flex">
        <div className="flex justify-around w-96 text-white self-center font-mono">
          <a href="/">Home</a>
          <a href="/Shop">Shop</a>
          <a href="/Liked">Liked</a>
        </div>
      </div>
    </>
  );
}

export default Header;
