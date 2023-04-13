import React, { useEffect, useState } from "react";
import data from "../data/User.json";
import "../App.css";
import hr from "./img/hr.svg";

const ProfileInfo = (props) => {
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
              src={props.avatar}
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
            {props.fullname}
          </span>
        </div>
        <div className="w-1/6 justify-center flex">
          <img src={hr} alt="" />
        </div>
        <div className="w-5/12">
          <span className="font-sans font-bold not-italic text-base">
            {props.title}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-80 text-center">
          <span className="font-sans font-bold not-italic text-xs text-slate-600">
            {props.tagOne} {props.tagTwo} {props.tagThree} {props.tagFour}{" "}
            {props.tagFive} {props.tagSix}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-80 text-center">
          <a
            href={props.linkOne}
            className="font-sans font-bold not-italic text-xs text-neutral-800"
          >
            {props.linkTitleOne}
          </a>
          <span className="font-sans font-bold not-italic text-xs text-slate-600">
            /
          </span>
          <a
            href={props.linkTwo}
            className="font-sans font-bold not-italic text-xs text-neutral-800"
          >
            {props.linkTitleTwo}
          </a>
          <span className="font-sans font-bold not-italic text-xs text-slate-600">
            /
          </span>
          <a
            href={props.linkThree}
            className="font-sans font-bold not-italic text-xs text-neutral-800"
          >
            {props.linkTitleThree}
          </a>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default ProfileInfo;
