import "./Login.css";
import { Link } from "react-router-dom";

export const Login = () => {

    return (
        <>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form className="login-form">
            <h3>Login</h3>

            <label for="username">Username</label>
            <input type="text" placeholder="Username" id="username" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <button>Log In</button>
            <div class="re-route">
                <p>You don't have an account... please go to the <Link to="/client-register">Register page</Link></p>
            </div>
        </form>
        </>
    )
}