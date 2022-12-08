import React from "react";
import {GET_PROFILE_PIC_URL} from "../../services/user-service";

export default function FriendCard({friend}) {
    return (
        <div key={friend.username} className={'friendCard'}>
            <div className="friendCardImageDiv">
                <img
                    src={GET_PROFILE_PIC_URL + "/" + friend.profile.profilePictureFullName}/>
            </div>
            <div className="friendCardDetailsDiv">
                <p>{friend.username}</p>
                <p>{friend.firstName} {friend.lastName}</p>

            </div>
        </div>
    );
}