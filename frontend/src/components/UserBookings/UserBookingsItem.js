import { useDispatch, useSelector } from 'react-redux';
import './UserBookings.css';
import { fetchSpot, getSpot } from '../../store/spotReducer';
import { useEffect, useState } from 'react';
import { deleteBooking, updateBooking } from '../../store/bookingReducer';
import Moment from 'moment';
import UserBookingEdit from './UserBookingEdit';

const UserBookingsItem = ({ booking }) => {
	const photo = 'https://hypecamp-seeds.s3.us-west-1.amazonaws.com/cabin.jpg';
	const spot = useSelector(getSpot(booking.spotId));
	const user = useSelector(state => state.session.user)
	// const [showEditModal, setShowEditModal] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSpot(booking.spotId));
	}, [booking])

	
	const formatDisplayDates = date => {
		return Moment(date).format('dddd, MMM DD')
	}

	

	// const handleOnClose = () => {
	// 	setShowEditModal(false);
	// }

	// const handleEdit = () => {
	// 	const start = formatInputDates();
	// 	const end = formatInputDates();
	// 	dispatch(updateBooking({ spot_id: spot.id, user_id: user.id, num_guests: totalGuests, 
	// 		price: totalPrice, start_date: start, end_date: end }))
	// }

	const handleDelete = () => {
		dispatch(deleteBooking(booking.id));
	}
	return (
		<div className='user-bookings-item'>
			<div className='booking-div'> 
				<img src={photo} alt='' className='booking-item-photo'/>
			</div>
			<h2 className='bookings-header'>{spot?.name}</h2>
			<div className='booking-div-text'> 
				<p>{spot?.city}, {spot?.state}</p>
				<p>{formatDisplayDates(booking.startDate)} to {formatDisplayDates(booking.endDate)}</p>
				<p>Number of guests: {booking.numGuests}</p>
				<p>Total: ${booking.price}</p>
			</div>
			<div className='edit-remove-booking'>
				{/* <div className='edit-booking' >
					Edit dates
				</div> */}
				<UserBookingEdit booking={booking} spot={spot}/>
				
				<div className='remove-booking' onClick={handleDelete}>
					Remove Booking
				</div>
			</div>
			
		</div>
	)
}

export default UserBookingsItem;