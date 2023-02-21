import React from "react";
import data from "../data/User.json";
import "../App.css";

const ProfileStories = () => {
  return (
    <div className="bg-white">
      <div className="flex grow-1 justify-around items-start w-full h-24">
        <div className="border-4 border-solid w-16 h-16 rounded-3xl cursor-pointer">
          <span className="relative flex items-center justify-center text-4xl">
            <strong>+</strong>
          </span>
          <span className="font-bold font-sans text-sm w-20 overflow-hidden text-ellipsis flex justify-center items-start relative top-5 right-3">
            My Story
          </span>
        </div>
        <div className="box-border shrink-0 border-0 grid place-items-center h-16 rounded-3xl text-center border-2 story">
          <img
            className=" h-16 flex shrink-1 h-fl rounded-2xl cursor-pointer"
            src={data[0].profileStory[0].path}
            alt=""
          />
          <span className="font-bold font-sans text-sm text-center">
            {data[0].profileStory[0].title}
          </span>
        </div>
        <div className="box-border grid place-items-center border-0 w-2/12 h-16 rounded-3xl text-center story">
          <img
            className="filistin  h-16 rounded-2xl cursor-pointer"
            src={data[0].profileStory[1].path}
            alt=""
          />
          <span className="font-bold font-sans text-sm">
            {data[0].profileStory[1].title}
          </span>
        </div>
        <div className="box-border grid place-items-center h-16 rounded-3xl text-center story">
          <img
            className=" h-16 rounded-2xl gladio cursor-pointer"
            src={data[0].profileStory[2].path}
            alt=""
          />
          <span className="font-bold font-sans text-sm">
            {data[0].profileStory[2].title}
          </span>
        </div>
        <div className="box-border grid place-items-center w-2/12 h-16 rounded-3xl text-center story">
          <img
            className="w-16 h-16 rounded-2xl cursor-pointer "
            src={data[0].profileStory[3].path}
            alt=""
          />
          <span className="font-bold font-sans text-sm">
            {data[0].profileStory[3].title}
          </span>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default ProfileStories;
