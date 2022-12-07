import React, {useState, useEffect} from "react";
import FriendPageCard from "./FriendPageCard";


function FriendPageMenu() {

    let [friendsList, setFriendsList] = useState([]);
    useEffect(() => {

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

    return (
        <div id={'friendPageDiv'}>
            {
                friendsList.map(friend => {
                    console.log(friend);
                    return (
                        <FriendPageCard friend={friend} />
                    )
                })
            }</div>
    );
}

export default FriendPageMenu;