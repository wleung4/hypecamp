import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import Navigation from './components/Navigation/Navigation';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import Splash from './components/Splash/Splash';
// import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
	<>	
		<div className='background'>
			<Navigation />
			<h2>Home</h2>
			<Switch>
				<Route path ="/signup">
					<SignupForm />
				</Route>
				<Redirect to='/' />
			</Switch>
		</div>
	</>
	
  );
}

export default App;
