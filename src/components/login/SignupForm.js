import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {registerNewUser} from "../../services/auth-service";

const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const users = [{username: "Admin", password: "123456789"}];

  const handleSubmit = (e) => {
    e.preventDefault();
    let year = dob.slice

    let userProfile = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      bio: bio
    };

    registerNewUser(userProfile, profilePicture)
    navigate("/login")
  }

  return (
    <div id={"loginContainer"} className={"dark-theme"}>
      <div className={"loginDiv"}>
        <h2>Signup</h2><br/>
        <form onSubmit={handleSubmit}>
          <label>First and Last Name: </label>
          <input
            type="text"
            name="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /><br/>
          <label>Date of Birth: </label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          /><br/>
          <label>Username: </label>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
          <label>Password: </label>
          <input
            type="password"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="Confirm Password"
            onChange={(e) => setPassword(e.target.value)}
          /> <br/>
          <textarea
            type="text"
            name="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          /><br/>
          <input
            type={"file"} onChange={(e) => setProfilePicture(e.target.files[0])}
          /> <br/>
          <input className="btn" type="submit" value="Register"/>
        </form>
      </div>
    </div>
  )
};
export default SignupForm;