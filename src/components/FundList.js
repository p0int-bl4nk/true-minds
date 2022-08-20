import { ListGroup } from 'react-bootstrap';
import funds from '../data.json';
import Fund from './Fund';

export default function FundList() {
	return (
		<div>
			<ListGroup>
				{
					funds.map(fund =>
						<ListGroup.Item key={fund.id}>
							<Fund fund={fund}/>
						</ListGroup.Item>
					)
				}
			</ListGroup>
		</div>
	);
}
