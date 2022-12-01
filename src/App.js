import './App.css';
import LoginForm from "./LoginForm";
import {useEffect, useState} from 'react';
import './Dashboard.js';
import Dashboard from "./Dashboard";
import FriendListApp from "./FriendsListApp";
import {Navigate} from "react-router-dom";
import loginForm from "./LoginForm";


function App() {
  const [authenticated, setAuthenticated] = useState({isAuthenticated: false});
  useEffect(() => {
    const authenticate = JSON.parse(localStorage.getItem("authenticated"));
    if (authenticate.isAuthenticated) {
      setAuthenticated(authenticate);
    }

    // fetch data from server
    if (!friendsList.length) {
      fetch("http://localhost:8080/api/test/friends")
        .then(response => response.json())
        .then(data => {
          console.log("fetching data...")
          setFriendsList(data);
        })
        .catch(error => console.log(error));
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

  let [friendsList, setFriendsList] = useState([]);




  if (!authenticated) {
    return <Navigate replace to="/login"/>
  } else {
    return (
      <>
        <div id={'top'}>
          <h1>RealBeatz</h1>

        </div>
        <div id={'out'} className={theme.className}>
          <div id={'left'}>
            {
              friendsList.map(friend => {
                console.log(friend);
                return (
                  <div key={friend.username}>
                    <span>Username: {friend.username}</span>
                    <span>First Name: {friend.firstName}</span>
                    <span>Last Name: {friend.lastName}</span>
                  </div>
                )
              })
            }
          </div>
          <div id={'mid'}>
            <Dashboard/>
            }
          </div>
          <div id={'right'}>
            <button className={'btn'} onClick={toggleTheme}>{theme.name}</button>
            <FriendListApp/>
          </div>
        </div>
      </>
    );
  }

}

export default App;
