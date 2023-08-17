import React from 'react';
import Splash from './components/Splash/Splash';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import { Switch, Route, Redirect } from 'react-router-dom';
import SpotIndex from './components/Spot/SpotIndex';
import SpotShow from './components/Spot/SpotShow';
import Navigation from './components/Navigation/Navigation';
import './index.css';
 
function App() {
  return (
	<>	
	<div className='background'>

		<Navigation />
		{/* <LoginForm />
		<SignupForm />
		<Splash /> */}
		<Switch>
			<Route exact path ='/' component={Splash}/>
			<Route exact path='/spots' component={SpotIndex}/>
			<Route exact path='/spots/:spotId' component={SpotShow}/>
			<Redirect to='/' />
		</Switch>
	</div>
	</>	
  );
}

export default App;
