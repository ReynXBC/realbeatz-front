import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Header({theme, setTheme}) {
    let themeName = 'Dark'
    const navigate = useNavigate();

    function toggleTheme() {
        if (theme.className === 'light-theme') {
            setTheme({className: 'dark-theme', name: 'Dark'})
        } else {
            setTheme({className: 'light-theme', name: 'Light'})
        }
    }

    function logout() {
        navigate("/login");
    }

    return (
        <header>
            <div id={'top'} className={theme.className}>
                <div id={'tleft'}>
                    <h1>RealBeatz</h1>
                </div>
                <div id={'tmid'}>

                </div>
                <div id={'tright'}>
                    <button className={'btn'} onClick={logout}>Logout</button>
                    <button className={'btn'} onClick={toggleTheme}>{theme.name}</button>
                </div>
            </div>
        </header>
    );
}