import React, {useState, useEffect} from "react";


function FriendList() {

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
        <>
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
            }</>
    );
}

export default FriendList;