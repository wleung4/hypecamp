import { useDispatch, useSelector } from 'react-redux';
import './UserBookings.css';
import { fetchSpot, getSpot } from '../../store/spotReducer';
import { useEffect } from 'react';

const UserBookingsItem = ({ booking }) => {
	const photo = 'https://hypecamp-seeds.s3.us-west-1.amazonaws.com/cabin.jpg';
	const spot = useSelector(getSpot(booking.spotId));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSpot(booking.spotId));
	}, [booking])

	return (
		<div className='user-bookings-item'>
			<div className='booking-div'> {/* photo */}
				<img src={photo} alt='' className='booking-item-photo'/>
			</div>
				<h2 className='bookings-header'>{spot?.name}</h2>
			<div className='booking-div-text'> {/* text */}
				<p>{spot?.city}, {spot?.state}</p>
				<p>Booked from {booking.startDate} to {booking.endDate}</p>
			</div>

		</div>
	)
}

export default UserBookingsItem;