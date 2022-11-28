import './App.css';
import LoginForm from "./LoginForm";
import {useEffect, useState} from 'react';
import './Dashboard.js';
import Dashboard from "./Dashboard";
import FriendListApp from "./FriendsListApp";
import {Navigate} from "react-router-dom";

function App() {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);
    const [theme, setTheme] = useState({className: 'dark-theme', name:'Dark'})
    let themeName = 'Dark'
    function toggleTheme() {
        if (theme.className === 'light-theme') {
            setTheme({className: 'dark-theme', name:'Dark'})
        } else {
            setTheme({className: 'light-theme', name:'Light'})
        }
    }
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

                    </div>
                    <div id={'mid'}>

                    }
                    </div>
                    <div id={'right'}>
                        <button className={'btn'} onClick={toggleTheme}>{theme.name}</button>
                        <FriendListApp />
                    </div>
                </div>
            </>
        );
    }

}

export default App;
