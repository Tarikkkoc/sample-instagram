import React, { Fragment } from "react";
import HomePage from "./homepage/HomePage";
import { Route, Switch } from "react-router-dom";
import Reels from "./reels/Reels";
import Profile from "./profile/Profile";
const Main = () => {
  return (
    <Fragment>
      <div className="content">
        <Switch className="">
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/search">
            <Reels />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
};

export default Main;
