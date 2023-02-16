import React from "react";

const ProfileBtns = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-14 flex justify-around text-center">
        <button className="shadow-black bg-gray-200 w-3/12 h-12 rounded-xl bg-slate-200 text-center font-extrabold font-sans text-sm">
          Edit Profile
        </button>
        <button className="shadow-black bg-gray-200 w-3/12 h-12 rounded-xl bg-slate-200 text-center font-extrabold font-sans text-sm">
          Statistics
        </button>
        <button className="shadow-black bg-gray-200 w-3/12 h-12 rounded-xl bg-blue-500 text-center text-white font-extrabold font-sans text-sm">
          Contact
        </button>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default ProfileBtns;
