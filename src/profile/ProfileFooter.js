import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Home from "../img/Home2.svg";
import Search from "../img/Search.svg";
import Add from "../img/add.svg";
import Heartplus from "../img/Heartplus.svg";
import ProfileX from "../img/Profile1.svg";
import HomeIndicator from "../img/HomeIndicator.svg";

const ProfileFooter = () => {
  return (
    <div className="reelsFooter w-full h-20 bg-white max-w-3xl mx-auto px-auto fixed bottom-0">
      <ul className="flex items-end justify-around h-12">
        <Link to="/">
          <li className="cursor-pointer">
            <img src={Home} alt="" />
          </li>
        </Link>
        <Link to="/search">
          <li className="cursor-pointer">
            <img src={Search} alt="" />
          </li>
        </Link>
        <li className="cursor-pointer">
          <img src={Add} alt="" />
        </li>
        <Link to="/likes">
          <li className="cursor-pointer">
            <img src={Heartplus} alt="" />
          </li>
        </Link>
        <Link to="/profile/ahmet_tarik">
          <li className="cursor-pointer">
            <img src={ProfileX} alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ProfileFooter;
