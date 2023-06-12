import { NavigationLink, Ul } from './Header.styled';

function Header() {
    return (
        <Ul>
            <li className="menu-item">
                <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li className="menu-item">
                <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
        </Ul>
    );
}

export default Header;
