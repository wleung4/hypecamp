import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings, getBookings } from "../../store/bookingReducer";
import './UserBookings.css';
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import UserBookingsItem from "./UserBookingsItem";
import { Link } from "react-router-dom/cjs/react-router-dom";
const UserBookings = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.session.user);
	const bookings = useSelector(getBookings);

	useEffect(() => {
		dispatch(fetchBookings(bookings))
	}, [])

	if(!user) return <Redirect to='/'/>

	const handleBookings = () => {
		const userBookings = Object.values(bookings).filter(booking => booking.userId === user.id).map(booking => {
			return <UserBookingsItem key={booking.id} booking={booking}/>
		})
		if(userBookings.length > 0) {
			return userBookings;
		} else {
			return (
				<>
					<p className='no-bookings'>No bookings found!</p>
					<Link to='/spots' className='link-to-spots'>Find a spot here!</Link>
				</>
			)
		}
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