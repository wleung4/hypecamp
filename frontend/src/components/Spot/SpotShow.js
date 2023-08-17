import { useDispatch, useSelector } from 'react-redux';
import './Spot.css';
import { useParams } from 'react-router-dom';
import { fetchSpot, getSpot } from '../../store/spotReducer';
import { useEffect } from 'react';

const SpotShow = () => {
	const dispatch = useDispatch();
	const { spotId } = useParams();
	const spot = useSelector(getSpot(spotId));

	useEffect(() => {
		dispatch(fetchSpot(spotId));
	}, [spotId])

	return (
		<>
			<h2>Spot {spotId} Show</h2>
			<div className='photos'>

			</div>
			<div className='description'>
				{/* {spot.description} */}
			</div>
			<div className='map'>

			</div>

			<div className='reviews'>

			</div>
		</>
	)
}

export default SpotShow;