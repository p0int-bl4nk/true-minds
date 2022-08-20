import { useState } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import { useData } from '../App';

export default function Cart() {
	const { cart } = useData();

	return (
		<div className='w-75 mx-auto'>
			<ListGroup>
				{
					Object
						.values(cart)
						.map(fund => (
							<ListGroup.Item key={fund.id}>
								<CartItem fund={fund}/>
							</ListGroup.Item>
						))
				}
			</ListGroup>
			<Button variant='primary' className='w-100 mt-4'>
				Invest Now
			</Button>
		</div>
	);
}

const amount = new Intl
	.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })
	.format;

function CartItem({ fund }) {
	return (
		<div className='w-100'>
			<div className='px-4'>
				<div className='form-row col-12 d-flex'>
					<div className='col-6 text-uppercase fs-5 fw-bold'>
						{fund.name}
					</div>
					<div className='col-6 fw-bold'>
						Min. Amount: {amount(fund.minimumPurchaseAmount)}
					</div>
				</div>
				<div className='form-row col-12 d-flex'>
					<small className='text-secondary fw-bold'>
						<span className='text-capitalize'>{fund.category.toLocaleLowerCase()}</span> * {fund.classification}
					</small>
				</div>
			</div>
			<div className='p-2'>
				<Input min={fund.minimumPurchaseAmount} max={fund.maximumPurchaseAmount}/>
			</div>
		</div>
	);
}

const Input = ({ min, max }) => {
	const [error, setError] = useState('');
	const [value, setValue] = useState(0);
	function handleChange(e) {
		let value  = e.target.value;

		if (!(/^[0-9]*$/.test(value)))
			setError('Please enter a valid amount!');
		else
			value = parseInt(value);

		console.log({ value });

		setValue(value);

		if (value < min)
			return setError(`Min. amount: ${amount(min)}`);

		if (value > max)
			return setError(`Max. amount: ${amount(max)}`);

		error && setError('');
	}

	return (
		<>
			<Form.Label>Amount</Form.Label>
			<Form.Control
				className='form-control'
				value={value}
				onChange={handleChange}
			/>
			{
				error &&
				<Form.Text className='text-danger'>{error}</Form.Text>
			}
		</>
	)
}
