import React from "react";
import Back from "./img/backSvg.svg";

const Header = () => {
  return (
    <div className="flex pt-6">
      <img className="w-8 h-8 cursor-pointer" src={Back} alt="" />
      <span className="w-[80%] pl-4 font-medium text-2xl">Bildirimler</span>
    </div>
  );
};

export default Header;
