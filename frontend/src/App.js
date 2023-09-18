import React from 'react';
import Splash from './components/Splash/Splash';
import { Switch, Route, Redirect } from 'react-router-dom';
import SpotIndex from './components/Spot/SpotIndex';
import SpotShow from './components/Spot/SpotShow';
import UserBookings from './components/UserBookings/UserBookings';
import './index.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
 
function App() {
//   const spots = useSelector(state => state.spots)
  return (
	<>	
		<Navigation /> 
		 <Switch>
			<Route exact path='/bookings' component={UserBookings}/>
			<Route exact path='/spots/:spotId' component={SpotShow}/>
			<Route exact path='/spots' component={SpotIndex}/>
			<Route exact path ='/' component={Splash}/>
			<Redirect to='/' />
		</Switch>
	</>	 
  );
}

export default App;
