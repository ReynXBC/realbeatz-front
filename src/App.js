import './App.css';
import {useEffect, useState} from 'react';
import './components/Dashboard.js';
import Dashboard from "./components/Dashboard";
import FriendList from "./components/FriendsList";
import {Navigate} from "react-router-dom";
import "./css/Post.css";
import Navbar from "./components/Navbar"


function App() {
  const [authenticated, setAuthenticated] = useState({isAuthenticated: false});
  useEffect(() => {
    const authenticate = JSON.parse(localStorage.getItem("authenticated"));
    if (authenticate.isAuthenticated) {
      setAuthenticated(authenticate);
    }


  }, []);
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


  if (!authenticated) {
    return <Navigate replace to="/login"/>
  } else {
    return (
      <div id={"container"}>
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
        <div id={'out'} className={theme.className}>
          <div id={'left'}>
            <Navbar/>
          </div>
          <div id={'mid'}>
            <Dashboard/>
          </div>
          <div id={'right'}>

            <FriendList/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
