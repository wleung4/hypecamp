import React, { useState } from 'react';
import * as sessionActions from '../../store/sessionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './LoginForm.css';

const LoginForm = () => {
	const dispatch = useDispatch();
	// const sessionUser = useSelector(state => state.session.user);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

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
			<ul>
				{errors.map(error => <li key={error}>{error}</li>)}
			</ul>
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
				Don't have an account? <Link>Sign up</Link>
			</div>
		</form>
	)
}

export default LoginForm;