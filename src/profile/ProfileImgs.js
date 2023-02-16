import React from "react";
import Avatar1 from "./img/img1.png";
import Avatar2 from "./img/img2.png";
import Avatar3 from "./img/img3.png";
import Avatar4 from "./img/img4.png";
import Avatar5 from "./img/img5.png";
import Avatar6 from "./img/img6.png";
import Avatar7 from "./img/img7.png";
import Avatar8 from "./img/img8.png";
import Avatar9 from "./img/img9.png";
import Avatar10 from "./img/img10.png";
import Avatar11 from "./img/img11.png";
import Avatar12 from "./img/img12.png";

const ProfileImgs = () => {
  return (
    <div className="mt-5 gap-4 space-y-4 columns-1 sm:columns-2 md:columns-3">
      <img className="w-full rounded-xl" src={Avatar10} alt="" />
      <img className="w-full rounded-xl" src={Avatar2} alt="" />
      <img className="w-full rounded-xl" src={Avatar3} alt="" />
      <img className="w-full rounded-xl" src={Avatar4} alt="" />
      <img className="w-full rounded-xl" src={Avatar5} alt="" />
      <img className="w-full rounded-xl" src={Avatar6} alt="" />
      <img className="w-full rounded-xl" src={Avatar12} alt="" />
      <img className="w-full rounded-xl" src={Avatar8} alt="" />
      <img className="w-full rounded-xl" src={Avatar9} alt="" />
      <img className="w-full rounded-xl" src={Avatar11} alt="" />
      <img className="w-full rounded-xl" src={Avatar7} alt="" />
      <img className="w-full rounded-xl" src={Avatar1} alt="" />
    </div>
  );
};

export default ProfileImgs;
