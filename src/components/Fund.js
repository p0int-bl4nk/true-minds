import { useNavigate } from 'react-router-dom';
import { useData } from '../App';

export default function Fund({ fund }) {
	const { addToCart, showToast, cart, removeFromCart } = useData();
	const navigate = useNavigate();

	const isAlreadyInCart = !!cart[fund.id];

	const handleClick = () => {
		if (isAlreadyInCart) {
			removeFromCart(fund);
			showToast(`"${fund.name}" removed from cart!`);
		} else {
			addToCart(fund);
			navigate('/cart');
		}
	}

	return (
		<div className='d-flex w-100 justify-content-between align-items-center'>
			<div className=''>
				<p className='text-uppercase fs-5 fw-bold'>{fund.name}</p>
				<small className='text-secondary fw-bold position-relative'>
					<span className='text-capitalize'>{fund.category.toLocaleLowerCase()}</span> * {fund.classification} * {fund.riskmeter}
				</small>
			</div>
			<div className=''>
				{
					isAlreadyInCart
						? <button className={`btn border-danger`} onClick={handleClick}>
								Remove from cart
							</button>
						: <button className={`btn border-primary`} onClick={handleClick}>
								Invest Now
							</button>
				}
			</div>
		</div>
	);
}
