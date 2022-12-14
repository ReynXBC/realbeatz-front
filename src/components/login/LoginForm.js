import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {authLogin} from "../../services/auth-service";
import {storeTokens} from "../../security/security";


const LoginForm = ({auth}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(username, password)
      .then(tokens => {
        console.log("tokens: ", tokens);
        auth.handleAuthenticationSuccess(username);
        auth.setTokens(tokens);
        storeTokens(tokens);
        navigate("/posts");
      })
      .catch(error => {
        console.log("error:", error);
      })
  };

  function signup() {
    navigate("/signup")
  }

  return (
    <div id={'loginContainer'} className={"dark-theme"}>
      <div className={"loginDiv"}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="btn" type="submit" value="Login"/>
        </form>
        <button className={"btn"} onClick={signup}>Signup</button>
      </div>
    </div>
  )
};
export default LoginForm;