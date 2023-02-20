import React from "react";
import { Link } from "react-router-dom";
import Home from "../img/Home.svg";
import Search from "../img/Search.svg";
import Add from "../img/add.svg";
import Heartplus from "../img/Heartplus.svg";
import Profile from "../img/Profile.svg";
import HomeIndicator from "../img/HomeIndicator.svg";
import "../App.css";

const Footer = () => {
  return (
    <div className="reelsFooter w-full h-24 bg-white max-w-3xl mx-auto px-auto fixed bottom-0">
      <ul className="flex items-end justify-around h-12 pt-2">
        <li>
          <Link to="/">
            <img className="cursor-pointer" src={Home} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <img className="cursor-pointer" src={Search} alt="" />
          </Link>
        </li>
        <li>
          <img className="cursor-pointer" src={Add} alt="" />
        </li>
        <li>
          <img className="cursor-pointer" src={Heartplus} alt="" />
        </li>
        <li>
          <Link to="/profile">
            <img className="cursor-pointer" src={Profile} alt="" />
          </Link>
        </li>
      </ul>
      <div className="flex items-end w-full h-12 justify-center">
        <img className="h-3 w-36" src={HomeIndicator} alt="" />
      </div>
    </div>
  );
};

export default Footer;
