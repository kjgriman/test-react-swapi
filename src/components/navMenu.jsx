import { Link, useLocation } from "react-router-dom";
export default function NavMenu() {
    const location = useLocation();

    const menuItems = [
        { to: '/', label: 'Home' },
        { to: '/people', label: 'People' },
        { to: '/planets', label: 'Planets' },
        { to: '/starships', label: 'Starships' },
    ];

    return (
        <nav>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            className={location.pathname === item.to ? 'active' : ''} 
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}