import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css';

const SignupFormModal = ({ onClose }) => {
	const [showModal, setShowModal] = useState(false);

	const handleOnClose = () => {
		if (onClose) {
			return onClose;
		} else {
			return () => setShowModal(false)
		}
	}

	return (
		<>
			<button onClick={() => setShowModal(true)} className='signup-button'>Sign Up</button>
			{showModal && (
				<Modal onClose={handleOnClose()}>
					<SignupForm onClose={handleOnClose()}/>
				</Modal>
			)}
		</>
	)
}

export default SignupFormModal;