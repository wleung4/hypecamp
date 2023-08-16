import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { activateSessionModal, deactivateSignupModal } from '../../store/uiReducer';

const LoginFormModal = ({ onClose }) => {
	const [showModal, setShowModal] = useState(false);
	// const dispatch = useDispatch();
	// const display = useSelector(state => state.ui.loginModal);

	// const handleClick = e => {
	// 	e.stopPropagation();
	// 	dispatch(deactivateSignupModal());
	// 	dispatch(activateSessionModal());
	// }

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