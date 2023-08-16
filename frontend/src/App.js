import React from 'react';
import Splash from './components/Splash/Splash';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
  return (
	<>	
		<LoginForm />
		<SignupForm />
		<Splash />
	</>	
  );
}

export default App;
