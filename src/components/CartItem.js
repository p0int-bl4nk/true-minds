import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { amount } from '../utils';

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
				<Input
					id={fund.id}
					min={fund.minimumPurchaseAmount}
					max={fund.maximumPurchaseAmount}
				/>
			</div>
		</div>
	);
}

const Input = ({ id, min, max }) => {
	const { register, formState: { errors } } = useFormContext();

	return (
		<>
			<Form.Label>Amount</Form.Label>
			<Form.Control
				{
					...register(
						id,
						{
							required: "Amount is required",
							min: {
								value: min,
								message: `Min. amount: ${amount(min)}`
							},
							max: {
								value: max,
								message: `Max. amount: ${amount(max)}`
							},
							valueAsNumber: true,
							validate: ( value ) => {
								if (!( /^\d+$/.test(value) )) return 'Invalid amount';
								return true;
							}
						}
					)
				}
				className='form-control'
			/>
			{
				errors[id] &&
				<Form.Text className='text-danger'>{errors[id].message}</Form.Text>
			}
		</>
	)
}

export default React.memo(CartItem);
