import { Link, NavLink } from 'react-router-dom';
import './Header.styles.scss';
const Header = () => {
	return (
		<header className="site-header container items-center flex mx-auto p-4 justify-between">
			<h1>
				<Link to="/">React Query</Link>
			</h1>
			<nav className="flex">
				<NavLink to="/" exact>
					Basic
				</NavLink>
				<NavLink to="/paginated">Paginated</NavLink>
			</nav>
		</header>
	);
};

export default Header;
