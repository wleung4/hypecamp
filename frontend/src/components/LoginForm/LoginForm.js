import React, { useState } from 'react';
import * as sessionActions from '../../store/sessionReducer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupForm/SignupForm';
import './LoginForm.css';
// import { activateSignupModal, deactivateSessionModal } from '../../store/uiReducer';

const LoginForm = ({ onClose }) => {
	const dispatch = useDispatch();
	// const sessionUser = useSelector(state => state.session.user);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const [signupModal, setSignupModal] = useState(false);
	// const display = useSelector(state => state.ui);

	const handleSubmit = e => {
		e.preventDefault();
		setErrors([]);
		dispatch(sessionActions.login({ email, password }))
			.catch(async (res) => {
				let data;
				try {
					data = await res.clone().json();
				} catch {
					data = await res.text();
				}
				if (data?.errors) setErrors(data.errors);
				else if (data) setErrors([data]);
				else setErrors([res.statusText]);
			})
	}

	const handleDemo = e => {
		e.preventDefault();
		dispatch(sessionActions.login({ email: 'demo@user.io', password: 'password'}))
	}

	// const handleSignupClick = e => {
	// 	e.stopPropagation();
	// 	dispatch(deactivateSessionModal());
	// 	dispatch(activateSignupModal());
	// 	setSignupModal(true);
	// }

	// if (!display.sessionModal) return null;

	return (
		<form onSubmit={handleSubmit} className='form'>
			<div className='login-form-header'>
				Log in to continue
			</div>
			<div className='login-form-sub'>
				Welcome back! Let's get you outside.
			</div>
			<div className='login-terms'>
				By continuing, you agree to Hypecamp's terms of use and privacy policy.
			</div>
			<label>
				<input type="text" value={email} placeholder='Email Address' onChange={e => setEmail(e.target.value)} required/>
			</label>
			<label>
				<input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required/>
			</label>
			<div className='button-div'>
				<button className='modal-button'>Log in</button>
			</div>
			<div className='button-div' onClick={handleDemo}>
				<button className='modal-button'>Demo Log in</button>
			</div>
			<div className='footer-link'>
				Don't have an account? <Link to='#'onClick={() => setSignupModal(true)}>Sign up</Link>
				{signupModal && (
					<Modal onClose={onClose}>
						<SignupForm onClose={onClose} />
					</Modal>
			)}
			</div>
			<ul>
				{errors.map(error => <li key={error} className='errors'>{error}</li>)}
			</ul>
		</form>
	)
}

export default LoginForm;