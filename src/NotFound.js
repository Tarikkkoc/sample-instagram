import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-auto h-screen flex flex-col justify-center items-center ">
      <h1 className="font-sans text-5xl font-semibold">Üzgünüz :(</h1> <br />
      <label className="text-3xl sm:text-clip">
        Gitmek istediğiniz sayfa bulunamadı.
      </label>{" "}
      <br />
      <Link to="/">
        <label className="text-3xl cursor-pointer text-red-700">
          Anasayfaya gitmek için lütfen tıklayınız.
        </label>
      </Link>
    </div>
  );
};

export default NotFound;
