import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import Navigation from './components/Navigation/Navigation';
// import Splash from './components/Splash/Splash';
// import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
	<>	
		<h2>Home</h2>
		<Navigation />
		<Switch>
			<Route path ="/signup">
				<SignupForm />
			</Route>
		</Switch>
	</>
	
  );
}

export default App;
