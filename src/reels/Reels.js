import React, { Fragment } from "react";
import Footer from "./FooterReels";
import SearchBar from "../reels/SearchBar";
import BordersArea from "./BordersArea";
import ReelsArea from "./ReelsArea";

const Reels = () => {
  return (
    <Fragment>
      <div className="container  h-screen max-w-3xl mx-auto px-5 ">
        <SearchBar />
        <BordersArea />
        <ReelsArea />
      </div>
      <div className="grid place-items-center">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Reels;
