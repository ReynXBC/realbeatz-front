import React, {useEffect, useState} from "react";
import {compileUserDetails, fetchUserFromStorage} from "../../utils/user-utils";
import {GET_PROFILE_PIC_URL} from "../../services/user-service";

export default function Profile() {

  const [user, setUser] = useState({});

  const [userDetails, setUserDetails] = useState({});

  let profilePictureRef = React.createRef();

  useEffect(() => {
    let fetchedUser = fetchUserFromStorage();
    console.log("in profile");
    console.log(fetchedUser);
    setUser(fetchedUser);
    let compiledUserDetails = compileUserDetails(fetchedUser);
    profilePictureRef.current.src = GET_PROFILE_PIC_URL + "/" + fetchedUser.profile.profilePictureFullName
    setUserDetails(compiledUserDetails);
  }, [])
  return (
    <div className={"profileContainer"}>
      <div className={"profilePicture"}>
        <img ref={profilePictureRef} alt={"Profile Picture"}></img>
      </div>
      <div className={"profileContent"}>
        <p>Username: {userDetails.username}</p>
        <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
        <p>Bio: {userDetails.bio}</p>
        <p>Date of Birth: {userDetails.dob}</p>
        <p>Age: {userDetails.age}</p>
        <p>Joined On {userDetails.registrationDate}</p>
      </div>
    </div>
  );
}