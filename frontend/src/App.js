import React from 'react';
import Splash from './components/Splash/Splash';
import { Switch, Route, Redirect } from 'react-router-dom';
import SpotIndex from './components/Spot/SpotIndex';
import SpotShow from './components/Spot/SpotShow';
import './index.css';
 
function App() {
  return (
	<>	
	<div className='background'>
		<Switch>
			<Route exact path='/spots/:spotId' component={SpotShow}/>
			<Route exact path='/spots' component={SpotIndex}/>
			<Route exact path ='/' component={Splash}/>
			<Redirect to='/' />
		</Switch>
	</div>
	</>	
  );
}

export default App;
