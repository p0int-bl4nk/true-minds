export const amount = new Intl
	.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })
	.format;
