import { useState } from "react";
import { Modal } from "../../context/Modal";
import BookingDayPicker from '../Booking/BookingDayPicker';
import GuestAdder from '../Booking/GuestAdder';
import './UserBookings.css';
import { updateBooking } from "../../store/bookingReducer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const UserBookingEdit = ({ booking, spot }) => {
	const [showEditModal, setShowEditModal] = useState(false);
	const [startDate, setStartDate] = useState(moment(booking.startDate));
	const [endDate, setEndDate] = useState(moment(booking.endDate));
	const [calendar, setCalendar] = useState(false);
	const [guestAdder, setGuestAdder] = useState(false);
	const [adultCounter, setAdultCounter] = useState(booking.numGuests);
	const [childrenCounter, setChildrenCounter] = useState(0);
	const user = useSelector(state => state.session.user);
	const dispatch = useDispatch();

	const onDatesChange = (startDate, endDate) => {
		setStartDate(startDate);
		setEndDate(endDate);
	}

	const onGuestChange = (adults, children) => {
		setAdultCounter(adults);
		setChildrenCounter(children);
	}

	const formatDate = date => {
		return date.format('MMM DD');
	}
	const handleDates = () => {
		setCalendar(!calendar);
		if(guestAdder) setGuestAdder(!guestAdder);
	}

	const handleGuests = () => {
		setGuestAdder(!guestAdder);
		if(calendar) setCalendar(!calendar);
	}

	const handleClose = (e) => {
		e.stopPropagation();
		setShowEditModal(false);
		setCalendar(false);
		setGuestAdder(false);
	}

	const getTotal = () => {
		if(startDate && endDate) return getDays() * spot.price;
	}

	const getDays = () => {
		return endDate.diff(startDate, 'days') + 1;
	}

	const handleConfirm = (e) => {
		e.stopPropagation()
		if(startDate && endDate) {
			dispatch(updateBooking( { id: booking.id, spot_id: booking.spotId, user_id: user.id, num_guests: adultCounter + childrenCounter, 
				price: getTotal(), start_date: startDate.format('YYYY-MM-DD'), end_date: endDate.format('YYYY-MM-DD')}));
			setShowEditModal(false);
		}
	}

	return (
		<>
			<div onClick={() => setShowEditModal(true)} className='edit-booking'>Edit booking
			{showEditModal && (
				<Modal onClose={handleClose}>
					<div className='edit-modal'>
						<h1 className='edit-header'>Edit this booking</h1>
						<div className='edit-calendar' onClick={handleDates}>
							<p className='edit-calendar-dates'>
								<i className="fa-solid fa-calendar"></i>
								{startDate && endDate ? `Start: ${(formatDate(startDate))} | 
									End: ${(formatDate(endDate))}`: 'Edit dates'}
							</p>
							{calendar && (
								<BookingDayPicker 
									startDate={startDate} 
									endDate={endDate}
									onDatesChange={onDatesChange}
								/>
							)}
						</div>
						<div className='edit-guest-adder' onClick={handleGuests}>
								<p className='edit-guest-adder-text'>
									<i className="fa-solid fa-user"></i>
									{adultCounter + childrenCounter} guests
								</p>
								{guestAdder && (
									<GuestAdder onGuestChange={onGuestChange}/>
								)}
						</div>
						<div className='new-checkout-info'>
							<h2>Booking summary</h2>
							<p>Dates booked: {startDate ? formatDate(startDate) : null} to {' '}
								{endDate ? formatDate(endDate) : null}</p>
							<p>Price per night: ${spot.price}</p>
							<p>Total: ${getTotal()} </p>
						</div>
						<button className='confirm-edit' onClick={handleConfirm}>Save</button>
					</div>
				</Modal>
			)}
			</div>
		</>
	)
}

export default UserBookingEdit;