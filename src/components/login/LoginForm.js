import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const users = [{ username: "Admin", password: "123456789" }];
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            localStorage.setItem("authenticated", JSON.stringify({isAuthenticated: true}));
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