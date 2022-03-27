import { Link } from 'react-router-dom';
import user from 'images/default-user.png';

export const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-avatar">
                <img src={user} alt="user" />
            </div>
        </div>
    )
}