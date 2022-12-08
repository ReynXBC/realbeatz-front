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
        <h1>Settings</h1>
    );
}