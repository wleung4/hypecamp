import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { activateSignupModal, deactivateSessionModal } from '../../store/uiReducer';

const SignupFormModal = ({ onClose }) => {
	const [showModal, setShowModal] = useState(false);
	// const dispatch = useDispatch();
	// const display = useSelector(state => state.ui.signupModal);

	// const handleClick = e => {
	// 	e.stopPropagation();
	// 	dispatch(deactivateSessionModal());
	// 	dispatch(activateSignupModal());
	// }

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