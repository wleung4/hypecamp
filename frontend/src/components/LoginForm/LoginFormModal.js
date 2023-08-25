import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css';

const LoginFormModal = ({ onClose }) => {
	const [showModal, setShowModal] = useState(false);

	const handleOnClose = () => {
		if (onClose) {
			return onClose;
		} else {
			return () => setShowModal(false);
		}
	}

	return (
		<>
			<button onClick={() => setShowModal(true)} className='login-button'>Log in</button>
			{showModal && (
				<Modal onClose={handleOnClose()}>
					<LoginForm onClose={handleOnClose()}/>
				</Modal>
			)}
		</>
	)
}

export default LoginFormModal;