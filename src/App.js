import './App.css';
import React, {useEffect, useState} from 'react';
import './components/Dashboard.js';
import Dashboard from "./components/Dashboard";
import FriendList from "./components/friendlist/FriendsList";
import {Navigate, Route, Routes} from "react-router-dom";
import "./css/Post.css";
import SideNavbar from "./components/side-nav/SideNavbar";
import "./css/Navbar.css";
import "./css/Friendlist.css";
import LoginForm from "./components/login/LoginForm";
import TestPage from "./components/Testpage";
import PostList from "./components/posts/PostList";

function App() {
  const [authenticated, setAuthenticated] = useState({isAuthenticated: false});
  // useEffect(() => {
  //   const authenticate = JSON.parse(localStorage.getItem("authenticated"));
  //   if (authenticate.isAuthenticated) {
  //     setAuthenticated(authenticate);
  //   }
  // }, []);
  const [theme, setTheme] = useState({className: 'dark-theme', name: 'Dark'})
  let themeName = 'Dark'

  function toggleTheme() {
    if (theme.className === 'light-theme') {
      setTheme({className: 'dark-theme', name: 'Dark'})
    } else {
      setTheme({className: 'light-theme', name: 'Light'})
    }
  }

  function logout() {
    //insert logout code here
  }

  const [postList, setPostList] = useState([
    {
      username: "foobar",
      content: "This is not a great website!!!!",
      numOfLikes: 10,
      timeStamp: "3:40 10/11/2022",
      comments: [
        {
          poster: "sunkit",
          content: "Yes, I agree"
        },
        {
          poster: "roger",
          content: "I think it's pretty cool"
        },
        {
          poster: "cole",
          content: "I know its terrible because I made it"
        }
      ]
    },
    {
      username: "heehoo",
      content: "Dr. Talbott is an easy A",
      numOfLikes: 10,
      timeStamp: "5:40 12/5/2022",
      comments: [
        {
          poster: "sunkit",
          content: "Yes, I agree"
        },
        {
          poster: "cole",
          content: "It's actually crazy"
        }
      ]
    }
  ]);
  return (
    <>
      <header>
        <div id={'top'} className={theme.className}>
          <div id={'tleft'}>
            <h1>RealBeatz</h1>
          </div>
          <div id={'tmid'}>

          </div>
          <div id={'tright'}>
            <button className={'btn'} onClick={toggleTheme}>{theme.name}</button>
            <button className={'btn'} onClick={logout}>Logout</button>
          </div>
        </div>
      </header>
      <Routes>
        <Route index element={<Dashboard theme={theme}/>}/>
        <Route path="/" element={<Dashboard theme={theme}/>}>
          <Route path="posts" element={<PostList postList={postList}/>}/>
        </Route>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="test" element={<TestPage/>}/>
      </Routes>
    </>
  );
}

export default App;
