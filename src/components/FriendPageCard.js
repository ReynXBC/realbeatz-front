import React from "react";

export default function FriendPageCard({friend}) {
    return (
        <div key={friend.username} className={'friendPageCard'}>
            <div className="friendPageCardImageDiv">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2vVVG2BOns1aicnn0wKmKn3aYtHCcBiysWlpz_c&s"}/>
            </div>
            <div className="friendPageCardDetailsDiv">
                <span>{friend.username}</span> <br/>
                <span>{friend.firstName} {friend.lastName}</span>
            </div>
        </div>
    );
}