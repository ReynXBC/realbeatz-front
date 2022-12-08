import React, {useEffect, useState} from "react";
import FriendPageCard from "./FriendPageCard";

export default function FriendPage({users}) {
  console.log("users received");
  console.log(users);

  return (
    <div className={'friendPageDiv'}>
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