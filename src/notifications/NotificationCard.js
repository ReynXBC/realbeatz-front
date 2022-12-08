import React from "react";

export default function NotificationCard({request}) {
  function acceptFriend(id) {
    //send to server with magic
  }

  return (
    <div key={request.username} className={'friendPageCard'}>
      <div className="friendPageCardImageDiv">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2vVVG2BOns1aicnn0wKmKn3aYtHCcBiysWlpz_c&s"}/>
      </div>
      <div className="friendPageCardDetailsDiv">
        <p>{request.firstName} {request.lastName}wants to be your friend!</p>
        <button className={'btn'} onClick={acceptFriend(request.id)}>Accept Request</button>
      </div>
    </div>
  );
}