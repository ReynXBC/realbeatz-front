import {useEffect, useState} from "react";

export default function Profile({user}) {

  useEffect(() => {
    setUserDetails(user);
  })

  const [userDetails, setUserDetails] = useState(
      {
        username: "Juauauan",
        firstName: "Jalin",
        lastName: "Hyatt",
        bio: "I have joined RealBeatz",
        numOfFriends: 14,
        joinDate: "11/11/2022",
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2vVVG2BOns1aicnn0wKmKn3aYtHCcBiysWlpz_c&s"
      }
  );
  return (
      <div className={"profileContainer"}>
        <div className={"profilePicture"} >
          <img src={userDetails.profilePicture} alt={"Profile Picture"}></img>
        </div>
        <div className={"profileContent"}>
          <p>Username: {userDetails.username}</p>
          <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
          <p>Bio: {userDetails.bio}</p>
          <p>Friends: {userDetails.numOfFriends}</p>
          <p>Joined On {userDetails.joinDate}</p>

        </div>
      </div>
  );
}