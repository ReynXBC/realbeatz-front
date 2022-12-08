import React from "react";
import {GET_PROFILE_PIC_URL} from "../../services/user-service";

export default function FriendPageCard({friend}) {
  function addFriend(id) {
    //send to server with magic
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
        <button className={'btn'} onClick={addFriend(friend.id)}>Add Friend</button>
      </div>
    </div>
  );
}