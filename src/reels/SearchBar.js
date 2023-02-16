import React from "react";
import "../App.css";
import Search1 from "../reels/img/Search1.svg";
import Scan from "../reels/img/Scan.svg";

const SearchBar = () => {
  return (
    <div className="w-auto h-16 bg-white flex items-center flex-wrap profileTop">
      <div className="flex items-center w-full h-11">
        <input
          type="search"
          placeholder="  Search"
          className="searchBarPrf rounded-3xl p-4 w-full shrink-1 h-10 bg-slate-200"
        />
        <img className="searchImg w-4 h-4" src={Search1} alt="" />
        <img className="w-12 h-12 pr-5 cursor-pointer" src={Scan} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
