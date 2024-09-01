import "./Register.css";

export const Register = () => {

    return(
        <>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form>
            <h3>Register Here</h3>

            <label for="email">Email</label>
            <input type="text" placeholder="Email" id="email" />

            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <label for="confirm-password">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" id="confirm-password" />

            <button>Register</button>
            <div class="social">
                <div class="go"><i class="fab fa-google"></i>  Google</div>
                <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>
        </>
    )
}