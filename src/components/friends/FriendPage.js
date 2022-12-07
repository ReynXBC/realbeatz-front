import React, {useEffect, useState} from "react";
import FriendPageCard from "./FriendPageCard";

export default function FriendPage() {

    let [userList, setUserList] = useState([]);
    useEffect(() => {

        // fetch data from server
        if (!userList.length) {
            fetch("http://localhost:8080/api/test/friends")
                .then(response => response.json())
                .then(data => {
                    console.log("fetching data...")
                    setUserList(data);
                })
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <div id={'friendPageDiv'}>
            {
                userList.map(friend => {
                    console.log(friend);
                    return (
                        <FriendPageCard friend={friend} />
                    )
                })
            }
        </div>
    );
}