import React, { useState } from "react";

const Shop = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  return (
    <div className="mt-44 text-3xl mx-auto w-4/5 ">
      <div className="flex  space-x-8">
        <div
          className="border-2 border-green-600 bg-gray-500 text-white rounded-md"
          onClick={() => setActiveMenu("menu1")}
        >
          Knapp 1
        </div>
        <div
          className="border-2 border-green-600 bg-gray-400 text-white rounded-md"
          onClick={() => setActiveMenu("menu2")}
        >
          Knapp 3
        </div>
      </div>
      <div>
        <div>{activeMenu === "menu1" && <p>Speil</p>}</div>
      </div>
      <div>{activeMenu === "menu2" && <p>Egg</p>}</div>
    </div>
  );
};

export default Shop;
