import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
// import Splash from './components/Splash/Splash';
// import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
	<Switch>
		<Route path ="/login">
			<LoginForm />
		</Route>
	</Switch>
  );
}

export default App;
