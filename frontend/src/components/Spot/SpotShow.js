import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Spot.css';
import { useParams } from 'react-router-dom';
import { fetchSpot, getSpot } from '../../store/spotReducer';
import BookingDayPicker from '../Booking/BookingDayPicker';
import GuestAdder from "../Booking/GuestAdder";
import { createBooking } from "../../store/bookingReducer";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
import SpotMapWrapper from "../Map/SpotMapIndex";
import ReviewItem from "../Review/ReviewItem";
import { fetchReviews } from "../../store/reviewReducer";

const SpotShow = () => {
	const dispatch = useDispatch();
	const { spotId } = useParams();
	const spot = useSelector(getSpot(spotId));
	const reviews = useSelector();
	const [calendar, setCalendar] = useState(false);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [guestAdder, setGuestAdder] = useState(false);
	const [adultCounter, setAdultCounter] = useState(1);
	const [childrenCounter, setChildrenCounter] = useState(0);
	const user = useSelector(state => state.session.user);
	const [loginModal, setLoginModal] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState([]);

	useEffect(() => {
		dispatch(fetchSpot(spotId));
		dispatch(fetchReviews(spotId));
	}, [spotId])

	const onDatesChange = (startDate, endDate) => {
		setStartDate(startDate);
		setEndDate(endDate);
	}

	const calendarOutsideClick = () => {
		setCalendar(false)
	}

	const formatDate = date => {
		return date.format('MMM DD');
	}

	const onGuestChange = (adults, children) => {
		setAdultCounter(adults);
		setChildrenCounter(children);
	}

	const handleOnClose = () => {
		setLoginModal(false)
	}

	const handleDates = () => {
		setCalendar(!calendar);
		if(guestAdder) setGuestAdder(!guestAdder);
	}

	const handleGuests = () => {
		setGuestAdder(!guestAdder);
		if(calendar) setCalendar(!calendar);
	}

	const handleSubmit = e => {
		e.preventDefault();
		setError([]);
		if(!startDate || !endDate) {
			setError(['Please select dates before trying again']);
			return;
		}
		const totalGuests = adultCounter + childrenCounter;
		const start = startDate.format('YYYY-MM-DD');
		const end = endDate.format('YYYY-MM-DD');
		const days = endDate.diff(startDate, 'days') + 1;
		const totalPrice = days * spot.price;
		if(user && startDate && endDate) {
			dispatch(createBooking({ spot_id: spot.id, user_id: user.id, num_guests: totalGuests, 
				price: totalPrice, start_date: start, end_date: end }))
			setRedirect(true);
		} else {
			setLoginModal(true);
		}

	}

	return (
		<>
			<div className='show-page'>
				<div className='header-info'>
					<h2 className='show-header'>{spot?.name}</h2>
					<div className='show-header-text'>
						<i className="fa-solid fa-thumbs-up" style={{fontSize: '20px'}}></i>
						<p className='percentage'>100%</p> 
						<p className='num-reviews'>42 reviews</p>
						<p className='city-state'>{spot?.city}, {spot?.state}</p>
					</div>
				</div>

				<div className='show-photos'>
					<img src={spot?.photos[0]} alt='' className='main-photo'/>
					<div className='other-photos'>
						<img src={spot?.photos[1]} alt='' className='secondary-photos'/>
						<img src={spot?.photos[2]} alt='' className='secondary-photos'/>
						<img src={spot?.photos[3]} alt='' className='secondary-photos'/>
						<img src={spot?.photos[4]} alt='' className='secondary-photos'/>
					</div>
				</div>

				<div className='show-description-amenities'>
					<p className='show-description'>
						{spot?.description}
					</p>
					<div className='show-activities'>
						Activities
					</div>
					<div className='show-amenities'>
						Amenities
					</div>
				</div>

				<hr className='show-horizontal-line'/>

				<div className='bookings'>
					<p className='text'>Book this Spot</p>
					<div className='bookings-data'>
						<div className='bookings-dates' onClick={handleDates}>
							<i className="fa-solid fa-calendar"></i>
							<p>{startDate && endDate ? `Start Date: ${formatDate(startDate)} | 
								End Date: ${formatDate(endDate)}`: 'Add dates'} </p>
							{calendar && (
								<BookingDayPicker 
									startDate={startDate}
									endDate={endDate}
									onDatesChange={onDatesChange}
									onOutsideClick={calendarOutsideClick}
								/>
							)}
						</div>
						<div className='bookings-num-guests' onClick={handleGuests}>
							<i className="fa-solid fa-user"></i>
							<p>{adultCounter + childrenCounter} guests</p>
							{guestAdder && (
								<GuestAdder onGuestChange={onGuestChange} capacity={spot?.capacity}/>
							)}
							
						</div>
						<button className='bookings-submit' onClick={handleSubmit}>
							Book now
						</button>
						{loginModal && !user && (
							<Modal onClose={handleOnClose}>
								<LoginForm onClose={handleOnClose}/>
							</Modal>
						)}
						
						{redirect && (
							<Redirect to='/bookings' />
						)}
					</div>
				<p className='booking-dates-error'>{error}</p>
				</div>

				<hr className='show-horizontal-line'/>

				<h2 className='map-head'>Location</h2>
				<div className='show-map'>
					{spot && (
						<SpotMapWrapper spots={{spot}} mapOptions={{center: {lat: spot.latitude, lng: spot.longitude}, zoom: 10}}/>
					)}
				</div>

				<hr className='show-horizontal-line'/>

				<div className='show-reviews'>
					<h2 className='reviews-head'>Reviews</h2>
				</div>
			</div>
		</>
	)
}

export default SpotShow;