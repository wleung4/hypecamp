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
import Footer from "../Footer/Footer";
import activitiesPng from "../../assets/activities.PNG";
import featuresPng from "../../assets/features.PNG";
import ReviewForm from "../Review/ReviewForm";

const SpotShow = () => {
	const dispatch = useDispatch();
	const { spotId } = useParams();
	const spot = useSelector(getSpot(spotId));
	const reviews = useSelector(state => state.reviews);
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
	const [reviewModal, setReviewModal] = useState(false);

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

	const handleAddReviewClick = e => {
		e.preventDefault();
		setReviewModal(true);
	}

	const closeReviewModal = () => {
		setReviewModal(false);
	}

	const handleSpotReviews = () => {
		const spotReviews = Object.values(reviews).map(review => {
			// sum += review.rating;
			return <ReviewItem key={review.id} review={review} />
		})
		// setRating(sum / reviews.length * 1.0);
		return spotReviews;
	}

	const handleRating = () => {
		if (Object.keys(reviews).length === 0) return 0;
		let sum = 0;

		for (let key in reviews) {
			sum += reviews[key].rating;
		}

		const avg = (1.0 * sum) / Object.keys(reviews).length;
		return Math.floor(avg);
	}

	return (
		<>
			<div className='show-page'>
				<div className='header-info'>
					<h2 className='show-header'>{spot?.name}</h2>
					<div className='show-header-text'>
						<i className="fa-solid fa-thumbs-up" style={{fontSize: '20px'}}></i>
						<p className='percentage'>{handleRating()}%</p> 
						<p className='num-reviews'>{Object.keys(reviews).length} reviews</p>
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
						<img src={activitiesPng} alt="" className='show-png'/>
					</div>
					<div className='show-amenities'>
						Features
						<img src={featuresPng} alt="" className='show-png'/>
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
					<h3>{spot?.rating}</h3>
					<button className="spot-add-review-button" onClick={handleAddReviewClick}>Add a review</button>
					<div className='show-review-items'>
						{handleSpotReviews()}
					</div>
					{reviewModal && (
						<Modal onClose={closeReviewModal}>
							<ReviewForm onClose={closeReviewModal}/>
						</Modal>
					)}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default SpotShow;