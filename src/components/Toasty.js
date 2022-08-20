import { Toast, ToastContainer } from 'react-bootstrap';
import { useData } from '../App';

export default function Toasty({ message }) {
	const { hideToast } = useData();

	return (
		<ToastContainer position='top-end'>
			<Toast bg='info' delay={3000} onClose={hideToast} autohide show={message}>
				<Toast.Body>{message}</Toast.Body>
			</Toast>
		</ToastContainer>
	)
}
