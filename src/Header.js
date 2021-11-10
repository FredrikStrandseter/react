import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div className="bg-black h-16">
      <div className="items-center">
        <img src="/netshoplogo.png" alt="" className="absolute left-1 w-32" />
        <AiOutlineUser className="text-white absolute right-2 m-4 text-4xl" />
      </div>
      <div className="ml-96 justify-items-center box-border h-10 w-96 border-2 border-gray-300 rounded-lg text-gray-300">
        yo yo yo
      </div>
    </div>
  );
}

export default Header;
