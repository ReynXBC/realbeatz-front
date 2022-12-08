import React from "react";
import {confirmFriendRequest, GET_PROFILE_PIC_URL, refuseFriendRequest} from "../../services/user-service";

export default function NotificationCard({request}) {
  function acceptFriend(id) {
    confirmFriendRequest(id)
      .catch(error => console.log(error));
  }

  function refuseFriend(id) {
    refuseFriendRequest(id)
      .catch(error => console.log(error));
  }

  let profilePictureURL = GET_PROFILE_PIC_URL + "/" + request.requesterProfilePictureFullName;

  if (request.status === "SENT") {
    return (
      <div key={request.requesterName} className={'friendPageCard'}>
        <div className="friendPageCardImageDiv">
          <img src={profilePictureURL} alt="Profile picture"/>
        </div>
        <div className="friendPageCardDetailsDiv">
          <p><span className="bold">{request.requesterName}</span></p>
          <p>wants to be your friend!</p>
          <button className={'btn'} onClick={acceptFriend(request.requesterId)}>Accept</button>
          <button className={'btn'} onClick={refuseFriend(request.requesterId)}>Refuse</button>
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