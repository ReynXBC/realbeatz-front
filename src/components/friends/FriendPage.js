import React, {useEffect, useState} from "react";
import FriendPageCard from "./FriendPageCard";
import {API_URL} from "../../config/WebConfigs";

export default function FriendPage() {

    let [userList, setUserList] = useState([]);
    useEffect(() => {

        // fetch data from server
        if (!userList.length) {
            fetch(API_URL + "/test/friends")
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