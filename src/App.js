import "./App.css";
import TimeBar from "./TimeBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import Reels from "./reels/Reels";
import Profile from "./profile/Profile";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <TimeBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <Reels />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
