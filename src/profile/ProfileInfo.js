import React, { useEffect, useState } from "react";
import data from "../data/User.json";
import "../App.css";
import PP from "./img/pp.jpeg";
import PPPlus from "./img/plus.svg";
import hr from "./img/hr.svg";

const ProfileInfo = () => {
  return (
    <div>
      <div className="w-full h-24 flex">
        <div className="flex flex-col w-2/6	justify-center items-end cursor-pointer">
          <span className="font-sans font-bold not-italic text-lg">19.03K</span>
          <span className="font-sans font-bold not-italic text-base text-slate-600">
            Followers
          </span>
        </div>
        <div className="flex  w-2/6 justify-center items-center">
          <div className="w-auto h-16 profileInf">
            <img
              className="items-center z-0 border-4 border-solid w-16 h-16 rounded-3xl border-t-lime-500 border-l-amber-500 border-b-teal-800 border-r-blue-700"
              src={PP}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-2/6 justify-center items-start cursor-pointer">
          <span className="font-sans font-bold not-italic text-lg">1</span>
          <span className="font-sans font-bold not-italic text-base text-slate-600">
            Following
          </span>
        </div>
      </div>
      <div className="flex w-full h-auto">
        <div className="w-5/12 flex justify-end">
          <span className="font-sans font-bold not-italic text-base">
            {data[0].fullname}
          </span>
        </div>
        <div className="w-1/6 justify-center flex">
          <img src={hr} alt="" />
        </div>
        <div className="w-5/12">
          <span className="font-sans font-bold not-italic text-base">
            {data[0].title}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-80 text-center">
          <span className="font-sans font-bold not-italic text-xs text-slate-600">
            {data[0].tag[0]} {data[0].tag[1]} {data[0].tag[2]} {data[0].tag[3]}{" "}
            {data[0].tag[4]} {data[0].tag[5]}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-80 text-center">
          <a
            href="https://github.com/Tarikkkoc"
            className="font-sans font-bold not-italic text-xs text-neutral-800"
          >
            {data[0].link[0]}
          </a>
          <span className="font-sans font-bold not-italic text-xs text-slate-600">
            /
          </span>
          <a
            href="https://www.linkedin.com/in/ahmet-tar??k-ko??-3b952a193/"
            className="font-sans font-bold not-italic text-xs text-neutral-800"
          >
            {data[0].link[1]}
          </a>
          <span className="font-sans font-bold not-italic text-xs text-slate-600">
            /
          </span>
          <a
            href="mailto:ahmettarikkoc@gmail.com"
            className="font-sans font-bold not-italic text-xs text-neutral-800"
          >
            {data[0].link[2]}
          </a>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default ProfileInfo;
