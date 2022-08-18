import funds from '../data.json';

export default function ListFunds() {
	return (
		<div>
			<h1>List Funds</h1>
			<ul>
				{
					funds.map(fund =>
						<li key={fund.id}>
							<Fund fund={fund} />
						</li>
					)
				}
			</ul>
		</div>
	);
}


function Fund({ fund }) {
	return (
		<div>
			<div>
				<h3>{fund.name}</h3>
				<div>
					{fund.category} * {fund.classification}  * {fund.riskmeter}
				</div>
			</div>
			<div>
				<button>Invest Now</button>
			</div>
		</div>
	);
}
