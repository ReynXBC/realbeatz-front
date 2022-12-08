import React from "react";
import {GET_PROFILE_PIC_URL} from "../../services/user-service";

export default function NotificationCard({request}) {
  function acceptFriend(id) {
    //send to server with magic
  }

  function refuseFriend(id) {

  }

  let profilePictureURL = GET_PROFILE_PIC_URL + "/" + request.requesterProfilePictureFullName;

  if (request.status === "SENT") {
    return (
      <div key={request.requesterName} className={'friendPageCard'}>
        <div className="friendPageCardImageDiv">
          <img src={profilePictureURL}/>
        </div>
        <div className="friendPageCardDetailsDiv">
          <p><span className="bold">{request.requesterName}</span></p>
          <p>wants to be your friend!</p>
          <button className={'btn'} onClick={acceptFriend(request.id)}>Accept</button>
          <button className={'btn'} onClick={refuseFriend(request.id)}>Refuse</button>
        </div>
      </div>
    );
  } else {
    return (
      <div key={request.requesterName} className={'friendPageCard'}>
        <div className="friendPageCardImageDiv">
          <img src={profilePictureURL}/>
        </div>
        <div className="friendPageCardDetailsDiv">
          <p><span className="bold">{request.requesterName}</span></p>
          <p>wants to be your friend!</p>
          <p>{
            request.status === "CONFIRMED" ? "Confirmed :)" : "Refused :("
          }</p>
        </div>
      </div>
    );
  }
}