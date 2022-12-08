import React, {useState, useEffect} from "react";
import FriendCard from "./FriendCard";


function FriendList({friends}) {
  console.log("Friends that I have:")
  console.log(friends);
  if (friends.length > 0) {
    return (
      <div id={'friendListDiv'}>
        {
          friends.map(friend => {
            return (
              <FriendCard friend={friend}/>
            )
          })
        }</div>
    );
  } else {
    return (
      <div id={"friendListDiv"}>
        <p>You have no friends :(</p>
      </div>
    )
  }
}

export default FriendList;