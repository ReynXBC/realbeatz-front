import { useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || 'false')
    );
    const users = [{ username: "Admin", password: "123456789" }];
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            localStorage.setItem("authenticated", 'true');
            navigate("/");
        }
    }

    return (
        <div id={'out'} className={"dark-theme"}>
            <p>Login</p><br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                /><br/>
                <input
                    type="password"
                    name="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
};
export default LoginForm;