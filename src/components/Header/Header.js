import { useContext } from 'react';
import { Link } from 'react-router-dom';

//import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    // const { user } = useContext(AuthContext);

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    HAVE FUN :)
                </Link>
            </h1>
            <nav>
                {/* {user.email && <span>{user.email}</span>} */}
                <Link to="/jokes">JOKES</Link>
                {/* {user.email */}
                <div id="user">
                    <Link to="/create">CREATE JOKE</Link>
                    <Link to="/logout">LOGOUT</Link>
                </div>
                <div id="guest">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/register">REGISTER</Link>
                </div>
                {/* } */}
            </nav>
        </header>
    );
};

export default Header;
