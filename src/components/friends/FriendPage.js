import React, {useEffect, useState} from "react";
import FriendPageCard from "./FriendPageCard";
import {TEST_API_URL} from "../../config/api-config";

export default function FriendPage({users}) {

  // let [userList, setUserList] = useState([]);
  // useEffect(() => {
  //
  //     // fetch data from server
  //     if (!userList.length) {
  //         fetch(TEST_API_URL + "/test/friends")
  //             .then(response => response.json())
  //             .then(data => {
  //                 console.log("fetching data...")
  //                 setUserList(data);
  //             })
  //             .catch(error => console.log(error));
  //     }
  // }, []);
  console.log("users received");
  console.log(users);

  return (
    <div id={'friendPageDiv'}>
      {
        users.map(user => {
          console.log(user);
          return (
            <FriendPageCard friend={user}/>
          )
        })
      }
    </div>
  );
}