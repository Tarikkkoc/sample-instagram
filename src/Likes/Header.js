import React from "react";
import { useHistory } from "react-router-dom";
import Back from "./img/backSvg.svg";

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="flex pt-6">
      <img
        onClick={handleClick}
        className="w-8 h-8 cursor-pointer"
        src={Back}
        alt=""
      />
      <span className="w-[80%] pl-4 font-medium text-2xl">Bildirimler</span>
    </div>
  );
};

export default Header;
