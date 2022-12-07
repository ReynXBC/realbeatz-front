import './App.css';
import React, {useEffect, useState} from 'react';
import './components/Dashboard.js';
import Dashboard from "./components/Dashboard";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import "./css/Post.css";
import "./css/Navbar.css";
import "./css/Friendlist.css";
import LoginForm from "./components/login/LoginForm";
import TestPage from "./components/Testpage";
import PostList from "./components/posts/PostList";
import Header from "./components/header/Header";
import {getPosts} from "./services/post-service";
import FriendPage from "./components/friends/FriendPage";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";

function App() {
  const [theme, setTheme] = useState({className: 'dark-theme', name: 'Dark'})
  const [postList, setPostList] = useState([]);

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
        <Route index element={<Dashboard theme={theme}/>}/>
        <Route path="/" element={<Dashboard theme={theme}/>}>
          <Route path="posts" element={<PostList postList={postList}/>}/>
          <Route path="friends" element={<FriendPage />}/>
          <Route path="profile" element={<Profile postList={postList}/>}/>
          <Route path="settings" element={<Settings postList={postList}/>}/>
        </Route>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="test" element={<TestPage/>}/>
      </Routes>
    </>
  );
}

export default App;
