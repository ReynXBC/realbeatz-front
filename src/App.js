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

function App() {
  const [theme, setTheme] = useState({className: 'dark-theme', name: 'Dark'})
  const [postList, setPostList] = useState([]);

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
    let fetchedPostList = getPosts();
    setPostList(fetchedPostList);
  }, [])


  return (
    <>
      <div>
        <Header theme={theme} setTheme={setTheme}/>
      </div>
      <Routes>
        <Route index element={<Dashboard isAuthenticated={isAuthenticated} theme={theme} username={username} />}/>
        <Route path="/" element={<Dashboard isAuthenticated={isAuthenticated} theme={theme} username={username}/>}>
          <Route path="posts" element={<PostList postList={postList}/>}/>
          <Route path="friends" element={<FriendPage  />}/>
          <Route path="profile" element={<Profile  />}/>
          <Route path="settings" element={<Settings postList={postList}/>}/>
        </Route>
        <Route path="login" element={<LoginForm auth={auth}/>}/>
        <Route path="signup" element={<SignupForm />}/>
        <Route path="test" element={<TestPage/>}/>
      </Routes>
    </>
  );
}

export default App;
