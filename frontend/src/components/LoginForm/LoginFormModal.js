import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css';

const LoginFormModal = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)} className='login-button'>Log in</button>
			{showModal && (
				<Modal onClose={()=> setShowModal(false)}>
					<LoginForm />
				</Modal>
			)}
		</>
	)
}

export default LoginFormModal;