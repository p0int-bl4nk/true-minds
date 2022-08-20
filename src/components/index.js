import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import FundList from './FundList';

export default function Body() {
	return (
		<Routes>
			<Route path='/list' element={<FundList/>}/>
			<Route path='/cart' element={<Cart/>}/>
			<Route path='*' element={<Navigate to='/list' replace/>}/>
		</Routes>
	)
}
