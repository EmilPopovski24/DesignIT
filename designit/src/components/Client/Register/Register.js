import "./Register.css";
import { Link } from "react-router-dom";

export const Register = () => {

    return(
        <>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form className="register-form">
            <h3>Register</h3>

            <label for="email">Email</label>
            <input type="text" placeholder="Email" id="email" />

            <label for="username">Username</label>
            <input type="text" placeholder="Username" id="username" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <label for="confirm-password">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" id="confirm-password" />

            <button>Register</button>
            <div class="re-route">
                <p>You already have an account... please go to the <Link to="/client-login">Login page</Link></p>
            </div>
        </form>
        </>
    )
}