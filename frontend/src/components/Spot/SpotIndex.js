import { useDispatch, useSelector } from 'react-redux';
import './Spot.css';
import { fetchSpots, getSpots } from '../../store/spotReducer';
import { useEffect } from 'react';
import SpotIndexItem from './SpotIndexItem';
import SpotMapWrapper from '../Map/SpotMapIndex';
import { useState } from 'react';

const SpotIndex = () => {
	const dispatch = useDispatch();
	const spots = useSelector(getSpots);
	const [highlightedSpot, setHighlightedSpot] = useState(null);

	useEffect(() => {
		dispatch(fetchSpots(spots));
	}, [])

	const handleSpots = () => {
		const allSpots = Object.values(spots).map(spot => {
			return <SpotIndexItem key={spot.id} spot={spot} highlightedSpot={highlightedSpot} 
				setHighlightedSpot={setHighlightedSpot}/>
		})
		return allSpots;
	}

	return (
		<>
			<div className='spots-index-page'>
				<div className='spots-index'>
					{handleSpots()}
				</div>

				<div className='spots-index-map'>
					<SpotMapWrapper spots={spots} highlightedSpot={highlightedSpot} 
						setHighlightedSpot={setHighlightedSpot}/>
				</div>
			</div>
		</>

	)
}

export default SpotIndex;