import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<Nav variant='tabs' justify fill>
			<Nav.Item>
				<Link to="/list">List</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/cart">Cart</Link>
			</Nav.Item>
		</Nav>
	);
}
