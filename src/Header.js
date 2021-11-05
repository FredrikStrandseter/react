import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div className="bg-black h-20">
      <div className="items-center">
        <img src="/netshoplogo.png" alt="" className="absolute left-1 w-40" />
        <AiOutlineUser className="text-white absolute right-1 m-7" />
      </div>
    </div>
  );
}

export default Header;
