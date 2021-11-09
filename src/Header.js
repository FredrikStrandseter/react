import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div className="bg-black h-16">
      <div className="items-center">
        <img src="/netshoplogo.png" alt="" className="absolute left-1 w-32" />
        <AiOutlineUser className="text-white absolute right-2 m-4 text-4xl" />
      </div>
    </div>
  );
}

export default Header;
