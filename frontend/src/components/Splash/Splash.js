import React from 'react';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import './Splash.css';


const Splash = () => {
	return (
		<>	
			<div className='background'>
				<Navigation />
				<div className='splash-text-div'>
					<h1 className='splash-text-header'>
						Find yourself outside.
					</h1>
					<h2 className='splash-text-sub'>
						Book beautiful and relaxing spots <br /> campsites—only on Hypecamp.
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