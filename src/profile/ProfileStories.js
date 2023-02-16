import React from "react";
import "../App.css";
import Travels from "./img/travel.svg";
import Cool from "./img/cool.svg";
import Scot from "./img/scot.svg";
import Holidays from "./img/holidays.svg";

const ProfileStories = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-around items-start w-full h-24">
        <div className="border-4 border-solid w-16 h-16 rounded-3xl cursor-pointer">
          <span className="relative flex items-center justify-center text-4xl">
            <strong>+</strong>
          </span>
          <span className="font-bold font-sans text-sm w-20 overflow-hidden text-ellipsis flex justify-center items-start relative top-5 right-3">
            My Story
          </span>
        </div>
        <div className="box-border border-0 h-16 rounded-3xl text-center border-2 story">
          <img
            className="w-full h-full rounded-2xl cursor-pointer"
            src={Travels}
            alt=""
          />
          <span className="font-bold font-sans text-sm">Travels</span>
        </div>
        <div className="box-border border-0 w-2/12 h-16 rounded-3xl text-center story">
          <img
            className="filistin w-full h-full rounded-2xl cursor-pointer"
            src={Cool}
            alt=""
          />
          <span className="font-bold font-sans text-sm">Cool</span>
        </div>
        <div className="box-border w-2/12 h-16 rounded-3xl text-center story">
          <img
            className="w-full h-full rounded-2xl gladio cursor-pointer"
            src={Scot}
            alt=""
          />
          <span className="font-bold font-sans text-sm">Scot</span>
        </div>
        <div className="box-border w-2/12 h-16 rounded-3xl text-center story">
          <img
            className="w-full h-full rounded-2xl cursor-pointer "
            src={Holidays}
            alt=""
          />
          <span className="font-bold font-sans text-sm">Holidays</span>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default ProfileStories;
