import React from "react";

function Home() {
  return (
    <di className="bg-gray-50">
      <div className=" w-4/5 mx-auto mt-20">
        <div className="flex justify-center">
          <img
            className="mt-16 rounded-2xl"
            src="framside net.shop.jpg"
            alt=""
          />
        </div>
        <div className="mt-20 text-transform: capitalize mb-5">
          <p className="text-5xl">Categories</p>
        </div>
        <div className="flex justify-between">
          <img
            className="mt-8 rounded-md mb-10 transition transform duration-300 ease-out hover:scale-105"
            width={300}
            src="/clothes net.shop.jpg"
            alt=""
          />
          <img
            className="mt-8 rounded-md mb-10 transition transform duration-300 ease-out hover:scale-105"
            width={300}
            src="/electronics net.shop.jpg"
            alt=""
          />
          <img
            className="mt-8 rounded-md mb-10 transition transform duration-300 ease-out hover:scale-105"
            width={300}
            src="/tools net.shop.jpg"
            alt=""
          />
          <img
            className="mt-8 rounded-md mb-10 transition transform duration-300 ease-out hover:scale-105"
            width={300}
            src="/workout net.shop.jpg"
            alt=""
          />
        </div>
      </div>
    </di>
  );
}

export default Home;
