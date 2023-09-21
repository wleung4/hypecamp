import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Spot.css';

const SpotIndexItem = ({ spot, highlightedSpot, setHighlightedSpot }) => {
	return (
		<>
			<div className={spot === highlightedSpot ? "container spot-highlighted" : "container"}
				 onMouseEnter={() => setHighlightedSpot(spot)} onMouseLeave={() => setHighlightedSpot(null)} >
				<div className='spots-index-item'>
					<Link to={`spots/${spot.id}`}>
						<img src={spot?.photos[0]} className='item-photo'/>
					</Link>
					<div className='text-container'>
						<p className='spot-rating'> 
							{/* <i className="fa-solid fa-thumbs-up" style={{fontSize: '16px'}}></i> */}
							{/* <sub className='rating'> 100% (42) </sub> */}
						</p>
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