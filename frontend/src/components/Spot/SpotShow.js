import { useDispatch, useSelector } from 'react-redux';
import './Spot.css';
import { useParams } from 'react-router-dom';
import { fetchSpot, getSpot } from '../../store/spotReducer';
import { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';

const SpotShow = () => {
	const dispatch = useDispatch();
	const { spotId } = useParams();
	const spot = useSelector(getSpot(spotId));
	const photo = 'https://hypecamp-seeds.s3.us-west-1.amazonaws.com/cabin.jpg';

	useEffect(() => {
		dispatch(fetchSpot(spotId));
	}, [spotId])

	return (
		<>
			<Navigation />
			<div className='show-page'>
				<div className='header-info'>
					<h2 className='show-header'>{spot?.name}</h2>
				</div>
				<div className='show-photos'>
					<div className='big-photo'>
						<img src={photo} alt='' className='main-photo'/>
					</div>
					<div className='other-photos'>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
					</div>
				</div>
				<div className='show-description'>
					{/* {spot.description} */}
				</div>
				<div className='show-map'>

				</div>

				<div className='show-reviews'>

				</div>
			</div>
		</>
	)
}

export default SpotShow;