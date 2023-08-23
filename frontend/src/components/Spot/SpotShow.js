import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Spot.css';
import { useParams } from 'react-router-dom';
import { fetchSpot, getSpot } from '../../store/spotReducer';
import { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import BookingDayPicker from '../Booking/BookingDayPicker';
import GuestAdder from "../Booking/GuestAdder";
import { createBooking } from "../../store/bookingReducer";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginForm/LoginForm";

const SpotShow = () => {
	const dispatch = useDispatch();
	const { spotId } = useParams();
	const spot = useSelector(getSpot(spotId));
	const photo = 'https://hypecamp-seeds.s3.us-west-1.amazonaws.com/cabin.jpg';
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [calendar, setCalendar] = useState(false);
	const [guestAdder, setGuestAdder] = useState(false);
	const [adultCounter, setAdultCounter] = useState(1);
	const [childrenCounter, setChildrenCounter] = useState(0);
	const user = useSelector(state => state.session.user);
	const [loginModal, setLoginModal] = useState(false);

	useEffect(() => {
		dispatch(fetchSpot(spotId));
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
		if(!startDate || !endDate) return;
		const totalGuests = adultCounter + childrenCounter;
		const start = startDate.format('YYYY-MM-DD');
		const end = endDate.format('YYYY-MM-DD');
		const days = endDate.diff(startDate, 'days') + 1;
		const totalPrice = days * spot.price;
		console.log(days);
		if(user) {
			dispatch(createBooking({ spot_id: spot.id, user_id: user.id, num_guests: totalGuests, 
				price: totalPrice, start_date: start, end_date: end }))
		} else {
			setLoginModal(true);
		}

	}

	return (
		<>
			{/* <Navigation /> */}
			{loginModal && !user && (
				<Modal onClose={handleOnClose}>
					<LoginForm onClose={handleOnClose}/>
				</Modal>
			)}
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
					{/* <div className='big-photo'>
					</div> */}
					<img src={photo} alt='' className='main-photo'/>
					<div className='other-photos'>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
					</div>
				</div>

				<div className='show-description-amenities'>
					<p className='show-description'>
						{spot?.description}
					</p>
					<div className='show-activities'>Activities</div>
					<div className='show-amenities'>Amenities</div>
				</div>
				
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
								<GuestAdder onGuestChange={onGuestChange}/>
							)}
							
						</div>
						<button className='bookings-submit' onClick={handleSubmit}>
							Book now
						</button>
					</div>
					
				</div>

				<div className='show-map'>
					<h2 className='map-head'>Map</h2>
				</div>

				<div className='show-reviews'>
					<h2 className='reviews-head'>Reviews</h2>
				</div>
			</div>
		</>
	)
}

export default SpotShow;