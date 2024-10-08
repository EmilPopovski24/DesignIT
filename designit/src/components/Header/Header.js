import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {

    return(
        <>
        <div className="header">
            <ul className="header-ul">
                <li className="header-li dropdown">I am a Client
                    <div className="dropdown-content">
                        <li className="header-li"><Link to="/client-login">Login</Link></li>
                        <li className="header-li"><Link to="/client-register">Register</Link></li>
                    </div>
                </li>
                <li className="header-li dropdown">I am a Seller
                    <div className="dropdown-content">
                        <li className="header-li"><Link to="/seller-login">Login</Link></li>
                        <li className="header-li"><Link to="/seller-register">Register</Link></li>
                        <li className="header-li"><Link to="/add-offer">Add An Offer</Link></li>
                    </div>
                </li>
                <li className="header-li"><Link to="/offer-request">Request an Offer</Link></li>
                <li className="header-li">Logout</li>
                <li className="header-li">About</li>
            </ul>
        </div>
        </>
    )
}