import React from "react";

export default function FriendCard({friend}) {
    return (
        <div key={friend.username} className={'friendCard'}>
            <div className="friendCardImageDiv">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2vVVG2BOns1aicnn0wKmKn3aYtHCcBiysWlpz_c&s"}/>
            </div>
            <div className="friendCardDetailsDiv">
                <span>Username: {friend.username}</span> <br/>
                <span>First Name: {friend.firstName}</span> <br/>
                <span>Last Name: {friend.lastName}</span> <br/>
            </div>
        </div>
    );
}