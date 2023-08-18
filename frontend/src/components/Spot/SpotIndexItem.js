import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Spot.css';

const SpotIndexItem = ({ spot }) => {

	return (
		<>
			<div className='container'>
				<div className='spots-index-item'>
					<img src={spot.photoUrls[0]} className='item-photo'/>
			
					<div className='text-container'>
						<Link to={`/spots/${spot.id}`} className='spot-name'>
							{spot.name}
						</Link>
						<p className='spot-text'>{spot.city}, {spot.state}</p>
						<p className='spot-text'>from ${spot.price}/night</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default SpotIndexItem;