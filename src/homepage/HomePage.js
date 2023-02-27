import React, { Fragment } from "react";
import Footer from "./Footer";
import PostArea from "./post/PostArea";
import Settings from "./Settings";
import Stories from "./Stories";

const HomePage = () => {
  return (
    <Fragment>
      <div
        className={
          "container h-full flex flex-col gap-2 max-w-3xl mx-auto px-5"
        }
      >
        <Settings />
        <Stories />
        <PostArea />
      </div>
      <div className="grid place-items-center">
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
