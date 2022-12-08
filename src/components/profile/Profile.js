import {useEffect, useState} from "react";
import {compileUserDetails, fetchUserFromStorage} from "../../utils/user-utils";

export default function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    let user = fetchUserFromStorage();
    setUser(user);
    let compiledUserDetails = compileUserDetails(user);
    setUserDetails(compiledUserDetails);
  })

  const [userDetails, setUserDetails] = useState(
      {
          id: '',
          username: "Juauauan",
          firstName: "Jalin",
          lastName: "Hyatt",
          bio: "I have joined RealBeatz",
          dob: "",
          age: 0,
          registrationDate: "11/11/2022",
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
          <p>Joined On {userDetails.registrationDate}</p>

        </div>
      </div>
  );
}