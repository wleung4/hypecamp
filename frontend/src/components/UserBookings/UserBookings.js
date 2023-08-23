import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings, getBookings } from "../../store/bookingReducer";
import './UserBookings.css';
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import UserBookingsItem from "./UserBookingsItem";

const UserBookings = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.session.user);
	const bookings = useSelector(getBookings);

	useEffect(() => {
		dispatch(fetchBookings(bookings))
	}, [])

	if(!user) return <Redirect to='/'/>

	const handleBookings = () => {
		const userBookings = Object.values(bookings).map(booking => {
			if(booking.userId === user.id) {
				return <UserBookingsItem booking={booking}/>
			}
		})
		return userBookings;
	}
	return (
		<div> 
			<div className='user-bookings-page'>
				{handleBookings()}
			</div>
		</div>
	)
}

export default UserBookings;