import React from "react";
import Likes1 from "./img/likes1.svg";
import Likes2 from "./img/likes2.svg";
import Likes3 from "./img/likes3.svg";
import "../App.css";

const LikedBar = () => {
  return (
    <div className="flex">
      <div className="flex grow-0 shrink-0 -space-x-2">
        <div>
          <img
            className="rounded-full w-6 h-6 cursor-pointer border-2 border-white"
            src={Likes3}
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-full w-6 h-6 cursor-pointer border-2 border-white"
            src={Likes2}
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-full w-6 h-6 cursor-pointer border-2 border-white"
            src={Likes1}
            alt=""
          />
        </div>
      </div>
      <div className="grow pl-2 overflow-hidden whitespace-nowrap">
        Camilia,Hank,Kho...
      </div>
      <div className="">
        <button className="inline-block px-4 py-1 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
          More
        </button>
      </div>
    </div>
  );
};

export default LikedBar;
