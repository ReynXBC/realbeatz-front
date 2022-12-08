import React from "react";

export default function FriendPageCard({friend}) {
  function addFriend(id) {
    //send to server with magic
  }

  return (
    <div key={friend.username} className={'friendPageCard'}>
      <div className="friendPageCardImageDiv">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2vVVG2BOns1aicnn0wKmKn3aYtHCcBiysWlpz_c&s"}/>
      </div>
      <div className="friendPageCardDetailsDiv">
        <p>{friend.username}</p>
        <p>{friend.firstName} {friend.lastName}</p>
        <button className={'btn'} onClick={addFriend(friend.id)}>Add Friend</button>
      </div>
    </div>
  );
}