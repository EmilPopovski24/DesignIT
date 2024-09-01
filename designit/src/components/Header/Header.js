import './Header.css';

export const Header = () => {

    return(
        <>
        <div className="header">
            <ul className="header-ul">
                <li className="header-li">Login</li>
                <li className="header-li">Register</li>
                <li className="header-li">Logout</li>
                <li className="header-li">My Tasks</li>
                <li className="header-li">Add New Task</li>
                <li className="header-li">About</li>
            </ul>
        </div>
        </>
    )
}