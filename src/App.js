import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import Reels from "./reels/Reels";
import Profile from "./profile/Profile";
import NotFound from "./NotFound";
import LikesArea from "./Likes/LikesArea";
import { useEffect, useState } from "react";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import Swal from "sweetalert2";
import EditProfile from "./profile/edit/EditProfile";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState(null);
  const [currentUserStory, setCurrentUserStory] = useState(null);
  const [currentUserPosts, setCurrentUserPosts] = useState(null);
  const [userStory, setUserStory] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => alert(error));
    console.log(users);

    fetch("http://localhost:5000/user-data")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => alert(error));
    console.log(userData);

    fetch("http://localhost:5000/user-story")
      .then((res) => res.json())
      .then((data) => setUserStory(data))
      .catch((error) => alert(error));
    console.log(userStory);

    fetch("http://localhost:5000/user-posts")
      .then((res) => res.json())
      .then((data) => setUserPosts(data))
      .catch((error) => alert(error));
  }, []);

  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    console.log(user);
    if (user) {
      setCurrentUser(user);

      const data = userData.find((u) => u.username === user.username);
      setCurrentUserData(data);

      const dataStory = userStory.find((u) => u.username === user.username);
      setCurrentUserStory(dataStory);

      const dataPosts = userPosts.find((u) => u.username === user.username);
      setCurrentUserPosts(dataPosts);

      history.push("/");
      console.log(currentUser);
      console.log(currentUserStory);
      console.log(currentUserPosts);
    }
  };
  return (
    <>
      {/* <TimeBar /> */}

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login users={users} handleLogin={handleLogin} />
        </Route>
        <Route path="/search">
          <Reels />
        </Route>

        {/* <Route path="/profile">
            <Profile />
          </Route> */}
        <Route path="/profile/:username">
          <Profile
            currentUserData={currentUserData}
            currentUserStory={currentUserStory}
            currentUserPosts={currentUserPosts}
          />
        </Route>
        <Route path="/edit-profile">
          <EditProfile currentUserData={currentUserData} />
        </Route>
        <Route path="/likes">
          <LikesArea />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
