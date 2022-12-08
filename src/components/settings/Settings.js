import {useState} from "react";

export default function Settings({theme, setTheme}) {
    function toggleTheme() {
        if (theme.className === 'light-theme') {
            setTheme({className: 'dark-theme', name: 'Dark'})
        } else {
            setTheme({className: 'light-theme', name: 'Light'})
        }
    }

    return (
        <div className={"settingContainer"}>
            <div>
                <h2>Settings: </h2>
            </div>
            <div className={"themeButton"}>
                <button className={'btn'} onClick={toggleTheme}>{theme.name} Mode</button>
            </div>
        </div>

    );
}