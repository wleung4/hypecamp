import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './Splash.css';
import Search from '../Search/Search';
import LoginFormModal from '../LoginForm/LoginFormModal';
import SignupFormModal from '../SignupForm/SignupFormModal';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

const Splash = () => {
	// const [loggedIn, setLoggedIn] = useState(false);

	return (
		<>	
			<LoginForm />
			<SignupForm />
			<div className='background'>
				<Navigation />
				{/* {loggedIn && }
				{/* <LoginFormModal />
				<SignupFormModal /> */} 
				<div className='splash-text-div'>
					<h1 className='splash-text-header'>
						Find yourself outside.
					</h1>
					<h2 className='splash-text-sub'>
						Reserve beautiful private RV spots and <br />
						campsites—found only on Hypecamp.
					</h2>
				</div>
								
				<div className='search-div'>
					<Search />
				</div> 
				
			</div>
		</>
		
	  );
}

export default Splash;