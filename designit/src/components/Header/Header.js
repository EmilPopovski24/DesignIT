import './Header.css';

export const Header = () => {

    return(
        <>
        <div className="header">
            <ul className="header-ul">
                <li className="header-li dropdown">I am a Client
                    <div class="dropdown-content">
                        <li className="header-li">Login</li>
                        <li className="header-li">Register</li>
                    </div>
                </li>
                <li className="header-li dropdown">I am a Seller
                    <div class="dropdown-content">
                        <li className="header-li">Login</li>
                        <li className="header-li">Register</li>
                    </div>
                </li>
                <li className="header-li">Logout</li>
                <li className="header-li">About</li>
            </ul>
        </div>
        </>
    )
}