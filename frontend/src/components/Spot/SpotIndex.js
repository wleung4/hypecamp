import { useDispatch, useSelector } from 'react-redux';
import './Spot.css';
import { fetchSpots, getSpots } from '../../store/spotReducer';
import { useEffect } from 'react';
import SpotIndexItem from './SpotIndexItem';

const SpotIndex = () => {
	const dispatch = useDispatch();
	const spots = useSelector(getSpots);

	useEffect(() => {
		dispatch(fetchSpots(spots));
	}, [])

	const handleSpots = () => {
		const allSpots = Object.values(spots).map(spot => {
			return <SpotIndexItem key={spot.id} spot={spot}/>
		})
		return allSpots
	}

	return (
		<>
			<div className='spots-index-page'>
				<div className='spots-index'>
					{handleSpots()}
				</div>

				<div className='spots-index-map'>
					
				</div>
			</div>
		</>

	)
}

export default SpotIndex;