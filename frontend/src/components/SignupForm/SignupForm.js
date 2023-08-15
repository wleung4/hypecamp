import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/sessionReducer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignupForm = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = e => {
		e.preventDefault();
		if(password === confirmPassword) {
			setErrors([]);
			dispatch(sessionActions.signup({ email, username, password }))
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
				return setErrors(['Confirm password doesnt match password']);
		}
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<ul>
				{errors.map(error => <li key={error}>{error}</li>)}
			</ul>
			<div className='signup-header'>
				Sign up to continue
			</div>
			<div className='signup-sub'>
				Join our community of nature lovers to see all of your booking info in one place.
			</div>
			<div className='signup-terms'>
				By continuing, you agree to Hypecamp's Terms of Use and Privacy Policy.
			</div>
			<label>
				<input type='text' value={email} placeholder='Email Address' onChange={e => setEmail(e.target.value)} required/>
			</label>
			<label>
				<input type='text' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)} required/>
			</label>
			<label>
				<input type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} required/>
			</label>
			<label>
				<input type='password' value={confirmPassword} placeholder='Confirm Password' onChange={e => setConfirmPassword(e.target.value)} required/>
			</label>
			<div className='button-div'>
				<button className='modal-button'>Sign Up</button>
			</div>
			<div className='footer-link'>
				Already have an account? <Link>Log in</Link>
			</div>
		</form>
	)
}

export default SignupForm;