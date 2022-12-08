import React, {useState, useEffect} from "react";
import FriendCard from "./FriendCard";


function FriendList() {

    let [friendsList, setFriendsList] = useState([]);
    useEffect(() => {

        // fetch data from server
        if (!friendsList.length) {
            fetch("http://10.26.204.221:8080/api/test/friends")
                .then(response => response.json())
                .then(data => {
                    console.log("fetching data...")
                    setFriendsList(data);
                })
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <div id={'friendListDiv'}>
            {
                friendsList.map(friend => {
                    return (
                        <FriendCard friend={friend}/>
                    )
                })
            }</div>
    );
}

export default FriendList;