import React, { useState, useEffect } from "react";
import data from "../data/User.json";
import "../App.css";
import Settings from "../homepage/img/Setting.svg";
import Info from "../profile/img/profile_info.svg";
import Line3 from "../profile/img/Line 3.svg";
import Line4 from "../profile/img/Line 4.svg";

const ProfileBar = () => {
  return (
    <div className="w-full flex justify-between pt-5 items-center h-16">
      <img className="w-8 h-9 ml-4 cursor-pointer" src={Settings} alt="" />

      <div className="w-2/4 flex justify-center items-center">
        <span className="spangram font-sans">
          <strong>{data[0].username}</strong>
        </span>
        <img className="ml-2 w-3 h-1.5 cursor-pointer" src={Info} alt="" />
      </div>
      <div className="w-7 mr-4 flex-none cursor-pointer">
        <img className="w-7" src={Line3} alt="" />
        <img className="w-5 mt-1 ml-1" src={Line4} alt="" />
      </div>
    </div>
  );
};

export default ProfileBar;
