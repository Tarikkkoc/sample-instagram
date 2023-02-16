import React from "react";
import "../App.css";
import Icon1 from "./img/icon1.svg";
import Icon2 from "./img/icon2.svg";
import Icon3 from "./img/icon3.svg";
import Icon4 from "./img/icon4.svg";
import Icon5 from "./img/icon5.svg";
import Icon6 from "./img/icon6.svg";

const ProfileReelsBar = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-auto">
        <ul className="flex items-center justify-around">
          <li>
            <img className="icon1 cursor-pointer" src={Icon1} alt="" />
          </li>
          <li>
            <img className="icon2 cursor-pointer" src={Icon2} alt="" />
          </li>
          <li>
            <img className="icon3 cursor-pointer" src={Icon3} alt="" />
          </li>
          <li>
            <img className="icon4 cursor-pointer" src={Icon4} alt="" />
          </li>
          <li>
            <img className="icon5 cursor-pointer" src={Icon5} alt="" />
          </li>
          <li>
            <img className="icon6 cursor-pointer" src={Icon6} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileReelsBar;
