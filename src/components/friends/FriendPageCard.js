import React from "react";
import {addNewFriend} from "../../services/user-service";
import {GET_PROFILE_PIC_URL} from "../../services/user-service";

export default function FriendPageCard({friend}) {
  function handleAddFriend() {
    //send to server with magic
    addNewFriend(friend.id)
      .then((response) => {
        response.json()
      })
      .then((response) => {
        console.log(
          "Successfully sent friend request to " +
          "user with id: " + friend.id);
      })
      .catch(error => console.log(error));
  }

  return (
    <div key={friend.username} className={'friendPageCard'}>
      <div className="friendPageCardImageDiv">
        <img
          src={GET_PROFILE_PIC_URL+"/"+friend.profile.profilePictureFullName}/>
      </div>
      <div className="friendPageCardDetailsDiv">
        <p>{friend.username}</p>
        <p>{friend.firstName} {friend.lastName}</p>
        <button className={'btn'} onClick={handleAddFriend}>Add Friend</button>
      </div>
    </div>
  );
}