import React, { useState } from 'react';
import * as sessionActions from '../../store/sessionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

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

	return (
		<form onSubmit={handleSubmit}>
			<ul>
				{errors.map(error => <li key={error}>{error}</li>)}
			</ul>
			<label>Email
				<input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
			</label>
			<label>Password
				<input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
			</label>
			<button>Log in</button>
		</form>
	)
}

export default LoginForm;