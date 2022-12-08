import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
              alert("Login successful");
              auth.handleAuthenticationSuccess();
              auth.setTokens(tokens);
              storeTokens(tokens);
              navigate("/posts");
          })
          .catch(error => {
              console.log("error:", error);
          })
    };

    return (
        <div id={'out'} className={"dark-theme"}>
            <p>Login</p><br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <input
                    type="password"
                    name="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
};
export default LoginForm;