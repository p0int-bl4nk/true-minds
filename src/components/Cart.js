import { Button, ListGroup } from 'react-bootstrap';
import { useForm, FormProvider } from 'react-hook-form';
import { useData } from '../App';
import CartItem from './CartItem';

export default function Cart() {
	const { handleSubmit, ...methods } = useForm();

	const { cart, showToast, clearCart } = useData();

	const submit = (data) => {
		console.log('submit >>>>>>>', data);
		showToast('Order placed successfully!');
		clearCart();
	}

	const selectedFunds = Object.values(cart).filter(fund => !!fund);

	if (!selectedFunds.length)
		return (
			<div className='text-center'>
				<span>Cart is empty!</span>
			</div>
		);

	return (
		<div className='w-75 mx-auto'>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(submit)}>
					<fieldset disabled={methods.formState.isSubmitting}>
						<ListGroup>
							{
								selectedFunds
									.map(fund => (
										<ListGroup.Item key={fund.id}>
											<CartItem fund={fund}/>
										</ListGroup.Item>
									))
							}
						</ListGroup>
						<Button
							type='submit'
							variant='primary'
							className='w-100 mt-4'
						>
							Invest Now
						</Button>
					</fieldset>
				</form>
			</FormProvider>
		</div>
	);
}
