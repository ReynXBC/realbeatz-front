import './App.css';
import React, {useEffect, useState} from 'react';
import './components/Dashboard.js';
import Dashboard from "./components/Dashboard";
import {Route, Routes} from "react-router-dom";
import "./css/Post.css";
import "./css/Navbar.css";
import "./css/Friendlist.css";
import "./css/FriendPage.css";
import "./css/Profile.css";
import LoginForm from "./components/login/LoginForm";
import TestPage from "./components/Testpage";
import PostList from "./components/posts/PostList";
import Header from "./components/header/Header";
import {getPosts} from "./services/post-service";
import FriendPage from "./components/friends/FriendPage";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";
import SignupForm from "./components/login/SignupForm";
import {fetchAllFriendRequestsReceived, fetchAllRelatedPosts, fetchAllUsers} from "./services/user-service";
import NotificationPage from "./components/notifications/NotifcationPage";

function App() {
  const [theme, setTheme] = useState({className: 'dark-theme', name: 'Dark'})
  const [postList, setPostList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [friendRequestList, setFriendRequestList] = useState([]);

  // Authentication stuff
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokens, setTokens] = useState({
    accessToken: null,
    refreshToken: null
  });

  // User information
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({
    id: null,
    username: null,
    registrationDate: null,
    profile: null,
    friends: null,
    groupChats: null,
    posts: null,
    friendRequestsSent: null,
    friendRequestsReceived: null
  });


  function handleAuthenticationSuccess(username) {
    setIsAuthenticated(true);
    setUsername(username);
  }

  const auth = {
    isAuthenticated: isAuthenticated,
    handleAuthenticationSuccess: handleAuthenticationSuccess,
    tokens: tokens,
    setTokens: setTokens,
  }

  useEffect(() => {
    // let fetchedPostList = getPosts();
    // setPostList(fetchedPostList);
    // fetchAllUsers()
    //   .then(users => {
    //     console.log("users fetched: ");
    //     console.log(users);
    //     setUserList(users);
    //   });

    console.log("fetching notifications")
    fetchAllFriendRequestsReceived()
      .then(requests => {
        console.log("friend requests received");
        console.log(requests);
        setFriendRequestList(requests);
      })

    fetchAllRelatedPosts()
      .then(posts => {
        console.log("posts received")
        console.log(posts)
        setPostList(posts);
      })
  }, [])


  return (
    <>
      <div>
        <Header theme={theme} setTheme={setTheme}/>
      </div>
      <Routes>
        <Route index element={<Dashboard isAuthenticated={isAuthenticated} theme={theme} username={username}/>}/>
        <Route path="/" element={<Dashboard isAuthenticated={isAuthenticated} theme={theme} username={username}/>}>
          <Route path="posts" element={<PostList postList={postList}/>}/>
          <Route path="friends" element={<FriendPage users={userList}/>}/>
          <Route path="notifications" element={<NotificationPage requests={friendRequestList}/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="settings" element={<Settings theme={theme} setTheme={setTheme}/>}/>
        </Route>
        <Route path="login" element={<LoginForm auth={auth}/>}/>
        <Route path="signup" element={<SignupForm/>}/>
        <Route path="test" element={<TestPage/>}/>
      </Routes>
    </>
  );
}

export default App;
