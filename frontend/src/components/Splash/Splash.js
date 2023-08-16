import React from 'react';
import { Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './Splash.css';

const Splash = () => {
	return (
		<>	
			<div className='background'>
				<Navigation />
				<div class='splash-text-div'>
					<h1 className='splash-text-header'>
						Find yourself outside.
					</h1>
					<h2 className='splash-text-sub'>
						Reserve beautiful private RV spots and <br />
						campsites—found only on Hypecamp.
					</h2>
				</div>
				
				<Switch>
					<Redirect to='/' />
				</Switch>
			</div>
		</>
		
	  );
}

export default Splash;