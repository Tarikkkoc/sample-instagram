import React from "react";
import Reels from "./img/reels.svg";
import IGTV from "./img/igtv.svg";
import Store from "./img/store.svg";
import Games from "./img/Game.svg";

const BordersArea = () => {
  return (
    <div className="w-full h-16 mt-2 flex  justify-around items-center">
      <div className="flex flex-wrap cursor-pointer justify-center content-center flex-row w-1/5 h-12 bg-white rounded-3xl">
        <img className="w-5 h-5" src={Reels} alt="" />
        <span class="ml-1 hidden sm:block">
          <strong>Reels</strong>
        </span>
      </div>
      <div className="flex flex-wrap justify-center cursor-pointer content-center flex-row w-1/5 h-12 bg-white rounded-3xl">
        <img className="w-6 h-6" src={IGTV} alt="" />
        <span class="ml-1 hidden sm:block">
          <strong>IGTV</strong>
        </span>
      </div>
      <div className="flex flex-wrap justify-center cursor-pointer content-center flex-row w-1/5 h-12 bg-white rounded-3xl">
        <img className="w-5 h-6" src={Store} alt="" />
        <span class="ml-1 hidden sm:block">
          <strong>Store</strong>
        </span>
      </div>
      <div className="flex flex-wrap justify-center cursor-pointer content-center flex-row w-1/5 h-12 bg-white rounded-3xl">
        <img className="w-5 h-5" src={Games} alt="" />
        <span class="ml-1 hidden sm:block">
          <strong>Games</strong>
        </span>
      </div>
    </div>
  );
};

export default BordersArea;
